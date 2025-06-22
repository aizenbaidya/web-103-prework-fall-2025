import Navbar from "./components/Navbar.jsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main class="pico-background-blue-600">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
