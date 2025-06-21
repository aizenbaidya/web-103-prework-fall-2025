// To view a SINGLE content creator
import { useParams } from "react-router-dom"
import Card from "../components/Card.jsx"

const ViewCreator = ({ creators }) => {
    const { id } = useParams();
    const creator = creators.find(c => String(c.id) === id);

    if (!creator) return <div>Loading...</div>

    return (
        <>
            <div>ViewCreator page</div>
            <div>ID: {id}</div>
            <Card
                key={creator.id} // Only used internally by React
                id={creator.id}
                name={creator.name}
                url={creator.url}
                description={creator.description}
                imageURL={creator.imageURL}
            />
        </>
    )
}

export default ViewCreator
