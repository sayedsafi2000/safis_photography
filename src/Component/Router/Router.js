import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Hero from "../Hero/Hero";
import Main from "../Layout/Main";
import Services from "../Services/Services";
import SignUp from "../SignUp/SignUp";

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    path:"/",
                    element:<Hero></Hero>
                },
                {
                    path:"/addService",
                    element:<AddService></AddService>
                },
                {
                    path:"/services",
                    element:<Services></Services>
                },
                {
                    path:"/signup",
                    element:<SignUp></SignUp>
                }
            ]

        }
    ])

export default router;
