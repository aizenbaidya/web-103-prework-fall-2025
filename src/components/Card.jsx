import { Link } from "react-router-dom"
import "../styles/Card.css"

const Card = ({ id, name, url, description, imageURL }) => {
    return (
        <article className="card">
            <figure>
                <a href={`/view/${id}`}>
                    <img src={imageURL} className="card-image" />
                </a>
            </figure>
            <div className="card-content">
                <header><b>{name}</b></header>
                {/* {description} */}
                <footer><a>{url}</a></footer>
                <Link to={`/edit/${id}`}>
                    <button style={{ marginTop: "6px" }}>Edit</button>
                </Link>
            </div>
        </article>
    )
}

export default Card
