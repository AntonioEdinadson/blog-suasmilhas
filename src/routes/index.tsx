import { useRoutes } from "react-router-dom";
import { Post } from "../pages/Post";

import { Home } from "../pages/Home";
import { Simulator } from "../pages/simulator";

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
            path: '/simulador-milheiro',
            element: <Simulator />
        }
    ]);
}

export default RouterList;