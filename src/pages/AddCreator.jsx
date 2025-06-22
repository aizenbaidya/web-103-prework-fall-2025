// To add a new content creator
import CreatorForm from "../components/CreatorForm.jsx"

const AddCreator = ({ fetchCreators }) => {
    return (
        <CreatorForm
            isEditing={false}
            fetchCreators={fetchCreators}
        />
    )
}

export default AddCreator
