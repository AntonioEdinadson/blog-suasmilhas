import { useRoutes } from "react-router-dom";
import { Post } from "../pages/Post";

import { Home } from "../pages/Home";

const RouterList = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },

        {
            path: '/post',
            element: <Post />
        }
    ]);
}

export default RouterList;