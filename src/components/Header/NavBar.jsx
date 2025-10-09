import React from 'react';
import { FaGithub } from "react-icons/fa";
import logo1 from "../../assets/logo.png";
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 text-center border-purple-500 font-semibold" : "hover:text-purple-600 hover:font-semibold"}><li className='mr-2'>Home</li></NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 border-purple-500 font-semibold" : "hover:text-purple-600 hover:font-semibold"}><li className='ml-2 mr-2'>Apps</li></NavLink>
        <NavLink to="/installation" className={({ isActive }) => isActive ? "text-purple-600 border-b-2 border-purple-500 font-semibold" : "hover:text-purple-600 hover:font-semibold"}><li className='ml-2'>Installation</li></NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/">
                    <p className="btn btn-ghost text-xl text-purple-600"><img src={logo1} className='w-[40px] h-[40px]' alt="" /> Hero.IO</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/roll-raihan' target='_blank' rel="noopener noreferrer" className="btn btn-primary"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;