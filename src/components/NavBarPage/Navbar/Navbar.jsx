import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // You can save the user's preference to local storage or a global state management tool like Redux
    // localStorage.setItem('darkMode', !darkMode);
  };

  const devLinks = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/aboutMe'>About Me</Link></li>
  <li><Link to='/services'>Services</Link></li>
  <li><Link to='/portfolio'>portfolio</Link></li>
  <li><Link to='/blogs'>Blogs</Link></li>
  <li><Link to='/contactMe'>Contact Me</Link></li>
  </>


    return (
        <div className="theme-light .color_switch">
        <nav className={darkMode ? 'navbar dark' : 'navbar'}>
      <div className=""></div>
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {devLinks}
      </ul>
    </div>
    <div className="relative group">
                    <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full" src="https://i.ibb.co/zNchkFn/Whats-App-Image-2023-11-22-at-2-47-13-PM.jpg" alt="" />
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {devLinks}
    </ul>
  </div>
  
      <div className="dark-mode-toggle" onClick={handleDarkModeToggle}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
       
      </div>
    </nav>
    </div>
  );
};

export default Navbar;