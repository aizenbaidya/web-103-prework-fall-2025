import Navbar from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import "./styles/Layout.css"

const Layout = ({ ids }) => {
    return (
        <>
            <Navbar ids={ids} />
            <main className="pico-background-blue-600">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
