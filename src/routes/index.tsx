import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";

const RouterList = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home></Home>
        }
    ]);
}

export default RouterList;