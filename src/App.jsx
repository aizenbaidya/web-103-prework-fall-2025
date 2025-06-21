import './App.css'
import { useRoutes } from "react-router-dom"

import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

function App() {
    // Maps specific paths to React components
    const routes = useRoutes([
        { path: "/", element: <ShowCreators /> },
        { path: "/view", element: <ViewCreator /> },
        { path: "/edit", element: <EditCreator /> },
        { path: "/new", element: <AddCreator /> }
    ]);

    return routes;
}

export default App
