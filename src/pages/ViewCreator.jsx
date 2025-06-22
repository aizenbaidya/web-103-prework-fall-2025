// To view a SINGLE content creator
import { useParams } from "react-router-dom"
import "../styles/ViewCreator.css"

const ViewCreator = ({ creators }) => {
    const { id } = useParams();
    const creator = creators.find(c => String(c.id) === id);

    if (!creator) return <div>Loading...</div>

    return (
        <div className="view-creator-container pico-background-pumpkin-400">
            <img src={creator.imageURL} alt="" className="view-creator-img" />
            <div className="view-creator-info">
                <h1 className="pico-color-slate-750">{creator.name}</h1>
                <p className="pico-color-slate-500">{creator.description}</p>
                <div>
                    <i className="fa-brands fa-youtube pico-color-red-500" style={{ position: "relative", top: "1.5px" }}></i>
                    {" "}
                    <a href={creator.url}>{creator.url}</a>
                </div>
            </div>
        </div>
    )
}

export default ViewCreator
