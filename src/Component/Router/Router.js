import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Hero from "../Hero/Hero";
import Main from "../Layout/Main";
import MyReviews from "../MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReviewPage from "../ReviewPage/ReviewPage";
import Services from "../Services/Services";
import SignIn from "../SignIn/SignIn";
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
                    path:"/services/:id",
                    element:<ReviewPage></ReviewPage>,
                    loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                },
                
                {
                    path:"/my-reviews",
                    element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                },
                {
                    path:"/signup",
                    element:<SignUp></SignUp>
                },
                {
                    path:"/signin",
                    element:<SignIn></SignIn>
                }
            ]

        }
    ])

export default router;
