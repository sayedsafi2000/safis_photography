import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Hero from "../Hero/Hero";
import Main from "../Layout/Main";

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
                }
            ]

        }
    ])

export default router;
