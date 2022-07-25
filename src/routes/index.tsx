import { useRoutes } from "react-router-dom";
import { Post } from "../pages/Post";

import { Home } from "../pages/Home";
import { Card } from "../pages/Card";
import { Vocabulary } from "../pages/Vocabulary";

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
        }
    ]);
}

export default RouterList;