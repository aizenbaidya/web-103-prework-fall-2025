// To update a content creator's information
import CreatorForm from "../components/CreatorForm.jsx"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../client.js"

const EditCreator = ({ creators, handleDeleteCreator, fetchCreators }) => {
    const { id } = useParams();
    const creator = creators.find(c => String(c.id) === id);
    const navigate = useNavigate();

    if (!creator) return <div>Loading...</div>

    const handleDelete = async () => {
        const { error } = await supabase.from('creators').delete().eq('id', id);
        if (error) {
            console.error(error);
        } else {
            handleDeleteCreator(id);
            navigate("/");
        }
    }

    return (
        <>
            <CreatorForm
                initialData={{
                    id: id, // ONLY for use to update the right creator's information
                    name: creator.name,
                    url: creator.url,
                    description: creator.description,
                    imageURL: creator.imageURL
                }}
                isEditing={true}
                fetchCreators={fetchCreators}
            />
            <div style={{ margin: "0 20px 20px 20px" }}>
                <button onClick={handleDelete} className="pico-background-red-400" style={{ marginTop: "-16px", width: "100%" }}>Delete</button>
            </div>
        </>
    )
}

export default EditCreator
