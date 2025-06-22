import { useEffect, useState } from "react"
import { supabase } from "../client.js"

const CreatorForm = ({ initialData, isEditing = false }) => {
    const [creatorId, setCreatorId] = useState(null);
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({ name: "", url: "", description: "", imageURL: "" });

    useEffect(() => {
        if (initialData) {
            setCreatorId(initialData.id);
            setForm({
                name: initialData.name,
                url: initialData.url,
                description: initialData.description,
                imageURL: initialData.imageURL
            })
        }
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            const { error } = await supabase.from("creators").update(form).eq("id", creatorId);
            if (error) setMessage(error.message);
            else setMessage("Creator updated!");
        } else {
            const { error } = await supabase.from("creators").insert([form]);
            if (error) setMessage(error.message);
            else setMessage("Creator added!");
            setForm({ name: "", url: "", description: "", imageURL: "" });
        }
    };

    return (
        <>
            <form id="creatorForm" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input name="url" placeholder="URL" value={form.url} onChange={handleChange} required />
                <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <input name="imageURL" placeholder="Image URL" value={form.imageURL} onChange={handleChange} required />
            </form>
            <button type="submit" form="creatorForm" >{isEditing ? "Update!" : "Add!"}</button>
            <div>{message}</div>
        </>
    )
}

export default CreatorForm
