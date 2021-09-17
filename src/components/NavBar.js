import React from "react";
import { Link } from "react-router-dom";
// import Home from "../Home/Home";
import logo from "./logo.svg";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  return (
    <div>
      {/* <nav className='navbar navbar-expand navbar-dark bg-primary border-bottom m-0'> */}
      <nav className='navbar navbar-expand navbar-dark bg-primary fixed-top'>
        <Link to={"/"} className='navbar-brand text-light font-weight-bolder'>
          <img
            src={logo}
            alt='logo'
            width='40'
            height='40'
            className='vertical-align-middle'
          />
          {/* <span className=''>Main</span> */}
        </Link>
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-item nav-link active' to='/'>
              หน้าแรก
            </Link>
          </div>

          <div className='navbar-nav'>
            <Link className='nav-item nav-link active' to='/logout'>
              Logout
            </Link>
          </div>

          <div className='navbar-nav'>
            <Link className='nav-item nav-link active' to='/frmadd'>
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
