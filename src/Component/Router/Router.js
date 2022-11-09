import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import Blog from "../Blog/Blog";
import Hero from "../Hero/Hero";
import Main from "../Layout/Main";
import MyReviews from "../MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsersReview from "../ReviewPage/AllUsersReview";
import ReviewPage from "../ReviewPage/ReviewPage";
import UserReview from "../ReviewPage/UserReview";
import Services from "../Services/Services";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Update from "../Update/Update";

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
                    path:"/blog",
                    element:<Blog></Blog>
                },
                {
                    path:"/services/:id",
                    element:<ReviewPage></ReviewPage>,
                    loader:({params})=>fetch(`https://safis-photography-server.vercel.app/services/${params.id}`)
                },
                {
                    path:"/user-review/:id",
                    element:<UserReview></UserReview>,
                    loader:({params})=>fetch(`https://safis-photography-server.vercel.app/services/${params.id}`)
                },
   
                {
                    path:"/update/:id",
                    element:<Update></Update>,
                    loader:({params})=>fetch(`https://safis-photography-server.vercel.app/user-review/${params.id}`)
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
