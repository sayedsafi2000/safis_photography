import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                updateUserProfileHAndle(name, photoURL);
                navigate(from, { replace: true });
                toast.success("User Create Successfully")
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    const updateUserProfileHAndle = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
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
    
    return (
        <div>
            <div className="max-w-xs z-10 mx-auto  mt-20">
                <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-gray-700 ">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Full-Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your full Name" name='name' required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="photoURL">
                            photoURL
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="photoURL" name='photoURL' type="text" placeholder='Enter your photo Url' />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" name='email' required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" name='password' required />
                    </div>
                    <div className="flex items-center flex-col">
                        <button className=" block btn-primary hover:btn-warning text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <Link to="/signin" className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" >
                            Already have an account?
                        </Link>
                    </div>
                </form>
                <button onClick={handleGoogleSignin} className='btn btn-ghost text-black w-full mb-3 border-2 border-gray-700'><FaGoogle className='text-black mr-1' />  Sign in with google</button>
                
            </div>
        </div>
    );
};

export default SignUp;