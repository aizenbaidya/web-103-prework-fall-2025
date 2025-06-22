// To show ALL content creators
import Card from "../components/Card.jsx"
import "../styles/ShowCreators.css"

const ShowCreators = ({ creators, isLoading }) => {
    if (isLoading) return <div aria-busy="true" style={{ marginTop: "12px" }}></div>

    return (
        <>
            {creators && creators.length > 0 ? (
                <div className="creators-grid">
                    {creators.map((creator) => (
                        <Card
                            key={creator.id}
                            id={creator.id}
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ margin: "20px", textAlign: "center" }}>
                    <p>There aren't any creators yet. Add some!</p>
                    <img
                        src="https://i0.wp.com/media.giphy.com/media/CJN2cdXD51Q2c/giphy.gif?resize=320%2C240&ssl=1"
                        alt="Tumbleweeds rolling across the road"
                        style={{ borderRadius: "4px" }}
                    />
                </div>
            )}
        </>
    )
}

export default ShowCreators
