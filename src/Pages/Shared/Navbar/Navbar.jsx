import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
    const { user, signOutUser, setLoading } = useContext(AuthContext)
    console.log(user);
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="navbar bg-blue-950 h-32 pb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/alltoy'>All Toy</Link>
                        {
                            user ? <>
                                <Link to='/mytoy'>My Toy</Link>
                                <Link to='/addatoy'>Add a Toy</Link>
                            </>
                                :
                                <Link to="/login"></Link>
                        }
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
                <Link to='/' className="normal-case text-center text-3xl font-extrabold text-white pl-6 mt-4">Brain
                    <br />
                    Booster
                    <br />
                    Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white gap-6 font-bold text-xl mt-4">
                    <Link to='/'>Home</Link>
                    <Link to='/alltoy'>All Toy</Link>

                    {
                        user && <>
                            <Link to='/mytoy'>My Toy</Link>
                            <Link to='/addatoy'>Add a Toy</Link>
                        </>
                            // :
                            // <Link to="/login"></Link>
                    }

                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>


            {
                user ? <div>
                    <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip={user.displayName ? user ?.displayName : 'No UserName'}>
                        {
                            user.photoURL ? <img className='w-8 h-8 mx-3 md:mx-5 rounded-full' src={user.photoURL} alt="" /> : <HiUserCircle className='w-8 h-8 mx-3 md:mx-5 text-yellow-200' />
                        }
                    </div>
                    <button onClick={handleSignOut} className='btn btn-outline btn-warning text-xl normal-case'>Sign Out</button>
                </div> : <Link to='/login'><button className="btn btn-outline btn-warning text-xl normal-case mt-6 ml-52">Log in</button></Link>
            }


        </div>
    );
};

export default Navbar;

//
// <Link to='/blog'>Blog</Link>

