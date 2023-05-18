import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="navbar bg-slate-300 h-32 pb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        <Link to='/alltoy'>All Toy</Link>
                        <Link to='/mytoy'>My Toy</Link>
                        <Link to='/addatoy'>Add a Toy</Link>
                        <Link to='/blog'>Blog</Link>
                    </ul>
                </div>
                <Link to='/' className="normal-case text-3xl font-extrabold text-blue-600 pl-6 mt-4">Brain
                    <br />
                    Booster
                    <br />
                    Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-blue-700 gap-6 font-bold text-xl mt-4">
                    <Link to='/'>Home</Link>
                    <Link to='/alltoy'>All Toy</Link>
                    <Link to='/mytoy'>My Toy</Link>
                    <Link to='/addatoy'>Add a Toy</Link>
                    <Link to='/blog'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-active btn-info">Log in</button>
            </div>
        </div>
    );
};

export default Navbar;