import './App.css'
import { useEffect, useState } from 'react'
import { useRoutes } from "react-router-dom"
import { supabase } from "./client.js"

import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

function App() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase.from('creators').select();
            if (error) console.error(error);
            else setCreators(data);
        }
        fetchCreators();
    }, [])

    const handleDeleteCreator = (deleteId) => {
        setCreators(prevCreators => prevCreators.filter(creator => creator.id !== parseInt(deleteId)));
    }

    // Maps specific paths to React components
    const routes = useRoutes([
        { path: "/", element: <ShowCreators creators={creators} /> },
        { path: "/view/:id", element: <ViewCreator creators={creators} /> },
        { path: "/edit/:id", element: <EditCreator creators={creators} handleDeleteCreator={handleDeleteCreator} /> },
        { path: "/new", element: <AddCreator /> }
    ]);

    return routes;
}

export default App
