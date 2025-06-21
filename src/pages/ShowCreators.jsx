// To show ALL content creators
import Card from "../components/Card.jsx"

const ShowCreators = ({ creators }) => {
    return (
        <>
            <div>ShowCreators page</div>
            {creators.map((creator) => (
                <Card
                    key={creator.id} // Only used internally by React
                    id={creator.id}
                    name={creator.name}
                    url={creator.url}
                    description={creator.description}
                    imageURL={creator.imageURL}
                />
            ))}
        </>
    )
}

export default ShowCreators
