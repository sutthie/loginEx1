import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className='containner'>
      <div>
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
            <div className='navbar-nav ml-auto'>
              <Link className='nav-item nav-link active' to='/about'>
                About
              </Link>
            </div>
            <div className='navbar-nav ml-auto'>
              <Link className='nav-item nav-link active' to='/profile'>
                Profile
              </Link>
            </div>
          </div>
        </nav>
        <div>
          <div>
            <h1 className='text-center'>React Router Tutorial</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
