import React from 'react';
import {NavLink} from "react-router-dom";
const Layout = (props)  => {
    return (
        <div>
           <div className="navbar bg-green-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          <li><NavLink to={"/"}>Home</NavLink></li>
                          <li><NavLink to={"/team"}>Team</NavLink></li>
                          <li><NavLink to={"/service"}>Service</NavLink></li>
                          <li><NavLink to={"/project"}>Project</NavLink></li>
                          <li><NavLink to={"/tetimonial"}>Testimonial</NavLink></li>
                          <li><NavLink className="btn btn-outline btn-primary" to={"/login"}>Login</NavLink> </li>
                          <li><NavLink className="btn btn-info" to={"/register"}>Register</NavLink></li>
                        </ul>
                        </div>  
                        <a className="btn btn-ghost text-xl">Portfolio</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                          <li><NavLink to={"/team"}>Team</NavLink></li>
                          <li><NavLink to={"/service"}>Service</NavLink></li>
                          <li><NavLink to={"/project"}>Project</NavLink></li>
                          <li><NavLink to={"/testimonial"}>Testimonial</NavLink></li>
                          <li><NavLink className="btn btn-outline btn-primary" to={"/login"}>Login</NavLink> </li>
                          <li><NavLink className="btn btn-info" to={"/register"}>Register</NavLink></li>
                        
                        </ul>
                    </div>
                </div>
            {props.children}
          
        </div>
    );
};

export default Layout;