import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/skill' >skill</NavLink></li>
        <li><NavLink to='/about' >Project</NavLink></li>
        <li><NavLink to='/about' >Contact</NavLink></li>

    </>



    return (
        <div className="navbar bg-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content bg-white text-blue-800 mt-3 z-[50] p-4 shadow  rounded-box w-24">
                        {links}

                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    {/* <img className="w-14 h-14" src="https://i.ibb.co.com/2ZnYjVW/602232.png" alt="" /> */}
                <a className="text-lg md:text-2xl lg:text-2xl font-bold">Sharmin <span className="text-blue-900">Sharker</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="  active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">

                    {links}
                   

                </ul>
            </div>


            <div className="navbar-end ">
            <button className="px-4 py-3 rounded-lg bg-blue-900 text-white font-bold">Resume</button>
        </div>
        </div>
    );
};

export default Navbar;
