import { Link } from "react-router-dom"
import "../styles/Card.css"

const Card = ({ id, name, url, description, imageURL }) => {
    return (
        <article className="card">
            <figure>
                <a href={`/view/${id}`}>
                    <img
                        src={imageURL}
                        className="card-image"
                        style={{
                            transition: "filter 0.5s ease",
                            filter: "grayscale(1)",
                        }}
                        onMouseEnter={(e) => e.target.style.filter = "grayscale(0)"}
                        onMouseLeave={(e) => e.target.style.filter = "grayscale(1)"}
                    />
                </a>
            </figure>
            <div className="card-content">
                <header><b>{name}</b></header>
                {/* {description} */}
                <footer><a href={url}>{url}</a></footer>
                <Link to={`/edit/${id}`} style={{ marginTop: "auto" }}>
                    <button><i class="fa-solid fa-pen-to-square"></i>{" "}Edit</button>
                </Link>
            </div>
        </article>
    )
}

export default Card
