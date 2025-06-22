import Navbar from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import "./styles/Layout.css"

const Layout = () => {
    return (
        <>
            <Navbar />
            <main class="pico-background-blue-600">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
