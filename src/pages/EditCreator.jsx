// To update a content creator's information
import CreatorForm from "../components/CreatorForm.jsx"
import { useParams, useNavigate } from "react-router-dom"
import { supabase } from "../client.js"

const EditCreator = ({ creators, handleDeleteCreator }) => {
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
            <div>EditCreator page</div>
            <CreatorForm
                initialData={{
                    id: id, // ONLY for use to update the right creator's information
                    name: creator.name,
                    url: creator.url,
                    description: creator.description,
                    imageURL: creator.imageURL
                }}
                isEditing={true}
            />
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default EditCreator
