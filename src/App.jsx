import './App.css'
import { useEffect, useState } from 'react'
import { useRoutes, useLocation } from "react-router-dom"
import { supabase } from "./client.js"

import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

import Layout from "./Layout.jsx"

function App() {
    const [creators, setCreators] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const fetchCreators = async () => {
        setIsLoading(true);
        const { data, error } = await supabase.from('creators').select();
        if (error) console.error(error);
        else setCreators(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchCreators();
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleDeleteCreator = (deleteId) => {
        setCreators(prevCreators => prevCreators.filter(creator => creator.id !== parseInt(deleteId)));
    }

    // Maps specific paths to React components
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout ids={creators.map(creator => creator.id)} />,
            children: [
                { index: true, element: <ShowCreators creators={creators} isLoading={isLoading} /> },
                { path: "/view/:id", element: <ViewCreator creators={creators} /> },
                {
                    path: "/edit/:id", element: (
                        <EditCreator
                            creators={creators}
                            handleDeleteCreator={handleDeleteCreator}
                            fetchCreators={fetchCreators}
                        />
                    )
                },
                { path: "/new", element: <AddCreator fetchCreators={fetchCreators} /> }
            ]
        }
    ]);

    return routes;
}

export default App
