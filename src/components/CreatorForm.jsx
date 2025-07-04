import { useEffect, useState } from "react"
import { supabase } from "../client.js"
import confetti from "canvas-confetti"

import "../styles/CreatorForm.css"

const CreatorForm = ({ initialData, isEditing = false, fetchCreators }) => {
    const [creatorId, setCreatorId] = useState(null);
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

    const triggerConfetti = () => {
        confetti({
            particleCount: 64,
            spread: 128,
            origin: { y: 0.8 }
        });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            const { error } = await supabase.from("creators").update(form).eq("id", creatorId);
            if (error) {
                console.error(error.message);
            } else {
                fetchCreators();
                triggerConfetti();
            }
        } else {
            const { error } = await supabase.from("creators").insert([form]);
            if (error) {
                console.error(error.message);
            } else {
                setForm({ name: "", url: "", description: "", imageURL: "" });
                fetchCreators();
                triggerConfetti();
            }
        }
    };

    return (
        <div style={{ margin: "20px" }}>
            <form id="creatorForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="name" placeholder="Doctor Mike" value={form.name} onChange={handleChange} required />

                <label htmlFor="url">URL</label>
                <input name="url" placeholder="https://www.youtube.com/@DoctorMike" value={form.url} onChange={handleChange} required />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    placeholder="Mikhail Oskarovich Varshavskion, known popularly as Doctor Mike, is a Russian-born American family medicine physician, YouTuber, internet personality, philanthropist, and professional boxer."
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="my-textarea"
                />

                <label htmlFor="imageURL">Image URL</label>
                <input name="imageURL" placeholder="https://example.com/" value={form.imageURL} onChange={handleChange} required />
            </form>
            <button type="submit" form="creatorForm" className="pico-background-cyan-350">{isEditing ? "Update!" : "Add!"}</button>
        </div>
    )
}

export default CreatorForm
