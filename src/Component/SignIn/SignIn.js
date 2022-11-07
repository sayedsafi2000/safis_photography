import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import {  GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
const SignIn = () => {
    const navigate = useNavigate();
    const { providerLogin, signIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="max-w-xs  mx-auto mt-36">
                <form onSubmit={handleLoginSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 glass ">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Email/Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" name='email' id="username" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="************" />
                    </div>
                    <div className="flex items-center flex-col">
                        <button className=" block btn-primary hover:btn-warning text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                        <Link to="/register" className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" >
                            Create Your Account
                        </Link>
                        <Link className='text-blue-500'><small>Forget your password</small></Link>
                    </div>
                </form>
                <button onClick={handleGoogleSignin} className='btn glass text-white w-full mb-3'><FaGoogle className='text-white mr-1' />  Sign in with google</button>
            </div>
        </div>
    );
};

export default SignIn;