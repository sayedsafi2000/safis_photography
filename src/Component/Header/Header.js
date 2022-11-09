import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    const handleLogout = () => {
        userSignOut();
    }
    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/services">Services</Link></li>

                        <li className='header'>
                            {
                                user?.email ?
                                    <>
                                        <Link to="/addService">Add Service</Link>
                                        <Link to="/my-reviews">My Reviews</Link>
                                        <Link><button onClick={handleLogout} className='btn btn-ghost'>Sign Out</button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/signin">Log In</Link>
                                        <Link to="/signup">Sign Up</Link>
                                    </>
                            }
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                    <img className='w-11 h-11 rounded-full' src="logo.jpg" alt="" /> 
                <Link to="/" className="px-3 py-2   normal-case text-sm lg:text-xl header">
                     Safi's Photography</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='header'><Link to="/services">Services</Link></li>
                    <li className='header'>
                        {
                            user?.email ?
                                <>
                                    <Link to="/addService">Add Service</Link>
                                    <Link to="/my-reviews">My Reviews</Link>
                                    <Link><button onClick={handleLogout} className=' btn-ghost'>Sign Out</button></Link>
                                </>
                                :
                                <>
                                    <Link to="/signin">Log In</Link>
                                    <Link to="/signup">Sign Up</Link>
                                </>
                        }
                    </li>
                    <li className='header'>  <Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <p className='hidden lg:inline-block font-bold header'>{user?.displayName}</p>
                {
                    user?.photoURL ?
                        <img className='w-9 h-9 rounded-full ml-5 user-display' src={user?.photoURL} alt="" />
                        :
                        <FaUser className='w-5 h-5 mr-5'></FaUser>
                }

            </div>
        </div>
    );
};

export default Header;