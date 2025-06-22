import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
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
                <li><Link to="/view/123" className="nav-list-item">Random</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
