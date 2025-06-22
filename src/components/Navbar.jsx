import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = ({ ids }) => {
    const getRandomId = () => {
        const randomIndex = Math.floor(Math.random() * ids.length);
        return ids[randomIndex];
    }

    return (
        <nav className="sticky-navbar" style={{ overflow: "hidden" }}>
            <ul>
                <li>
                    <Link to="/" className="nav-list-item"><strong>CREATORVERSE</strong></Link>
                    <span style={{ position: "relative", top: "-3px" }}>📷</span>
                </li>
            </ul>
            <ul>
                <li><Link to="/new" className="nav-list-item">Add</Link></li>
                <li><Link to={`/view/${getRandomId()}`} className="nav-list-item">Random</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
