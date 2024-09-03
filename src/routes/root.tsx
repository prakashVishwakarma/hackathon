import { createBrowserRouter, } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },{
        path: "/admin-create-challenge",
        element: <App />,
    },
    {
        path: "/home",
        element: <App />,
    },
    {
        path: "/details",
        element: <App />,
    },
    {
        path: "/admin-edit-challenge",
        element: <App />,
    },
]);