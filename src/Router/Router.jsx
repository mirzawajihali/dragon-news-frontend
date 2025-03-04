import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";

const Router = createBrowserRouter([
    {
        path :"/",
        element : <Homelayout></Homelayout>
    },
    {
        path :"/news",
        element : <h1>News</h1>
    },
    {
        path :"auth",
        element : <h1>Login</h1>
    },
    {
        path :"*",
        element : <h1>404 error</h1>
    },
])

export default Router;