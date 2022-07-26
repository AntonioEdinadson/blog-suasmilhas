import { useRoutes } from "react-router-dom";
import { Post } from "../pages/Post";

import { Home } from "../pages/Home";
import { Card } from "../pages/Card";
import { Vocabulary } from "../pages/Vocabulary";
import { Simulation } from "../pages/Simulation";

const RouterList = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },

        {
            path: '/post',
            element: <Post />
        },

        {
            path: '/cartoes',
            element: <Card />
        },

        {
            path: '/vocabulario-milhas',
            element: <Vocabulary />
        },

        {
            path: '/simulador-milhas',
            element: <Simulation />
        }        
    ]);
}

export default RouterList;