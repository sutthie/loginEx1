import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { statusLogin: Auth.getAuth() };
    console.log("Status First :" + this.state.statusLogin);
  }

  login = async (e) => {
    e.preventDefault();
    Auth.authenticate();
    alert(Auth.getAuth());
    // this.setState({ statusLogin: Auth.getAuth() }, () => {
    //   console.log("Status Login Click :" + this.state.statusLogin);
    // });
    //console.log(Auth.getAuth());
    await this.setState({ statusLogin: Auth.getAuth() });
    console.log("Status Login Click :" + this.state.statusLogin);
  };

  logout = async (e) => {
    e.preventDefault();
    Auth.signout();
    alert(Auth.getAuth());
    // this.setState({ statusLogin: Auth.getAuth() }, () => {
    //   console.log("Status Logout :" + this.state.statusLogin);
    // });
    await this.setState({ statusLogin: Auth.getAuth() });
    console.log("Status Logout :" + this.state.statusLogin);
  };

  render() {
    // const { status } = this.state.statusLogin;

    return (
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
          </Link>
          <div className='collapse navbar-collapse'>
            <div className='navbar-nav ml-auto'>
              <Link className='nav-item nav-link active' to='/'>
                หน้าแรก
              </Link>
            </div>

            <div className='navbar-nav'>
              <Link className='nav-item nav-link active' to='public'>
                Public
              </Link>
            </div>

            <div className='navbar-nav'>
              <Link className='nav-item nav-link active' to='protected'>
                Protected
              </Link>
            </div>

            {/* {status === true ? (
              <div className='navbar-nav'>
                <Link className='nav-item nav-link active' to='protected'>
                  Protected
                </Link>
              </div>
            ) : (
              <div></div>
            )} */}
          </div>
        </nav>
        <div className='container pt-5'>
          <div className='mt-4'></div>
          <div>
            <button onClick={(e) => this.login(e)}>Login</button>
            <button onClick={(e) => this.logout(e)}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
