import {
    Home, Login, Register, Students, Teachers
} from "../Pages/index";

const RoutesData = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/students",
        element: <Students />
    },
    {
        path: "/teachers",
        element: <Teachers />
    }
]

export default RoutesData;