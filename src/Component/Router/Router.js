import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Main from "../Layout/Main";

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    path:"/",
                },
                {
                    path:"/addService",
                    element:<AddService></AddService>
                }
            ]

        }
    ])

export default router;
