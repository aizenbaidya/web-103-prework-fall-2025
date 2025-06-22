// To show ALL content creators
import Card from "../components/Card.jsx"
import "../styles/ShowCreators.css"

const ShowCreators = ({ creators }) => {
    return (
        <>
            {creators?.length === 0 && <div>No creators yet, add some!</div>}
            <div className="creators-grid">
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
            </div>
        </>
    )
}

export default ShowCreators
