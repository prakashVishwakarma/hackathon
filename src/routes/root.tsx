import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import AdminCreateChallenge from "../pages/admin-create-challenge";
import SignupPage from "../pages/signup";
import Login from "../components/Login/Login";
import Home from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/admin-create-challenge",
        element: <AdminCreateChallenge />,
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