// To update a content creator's information
import CreatorForm from "../components/CreatorForm.jsx"
import { useParams } from "react-router-dom"

const EditCreator = ({ creators }) => {
    const { id } = useParams();
    const creator = creators.find(c => String(c.id) === id);

    if (!creator) return <div>Loading...</div>

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
        </>
    )
}

export default EditCreator
