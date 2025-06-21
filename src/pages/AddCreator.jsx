// To add a new content creator
import { supabase } from "../client.js"
import { useState } from "react"

const AddCreator = () => {
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase.from("creators").insert([form]);
        if (error) setMessage(error.message);
        else setMessage("Creator added!");
    };

    return (
        <>
            <div>AddCreator page</div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input name="url" placeholder="URL" value={form.url} onChange={handleChange} required />
                <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <input name="imageURL" placeholder="Image URL" value={form.imageURL} onChange={handleChange} required />
                <button type="submit">Add</button>
            </form>
            <div>{message}</div>
        </>
    )
}

export default AddCreator
