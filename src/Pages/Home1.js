import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  // const LogoutClick = (e) => {
  //   e.preventDefault();
  //   Logout();
  // };
  return (
    <div className='container'>
      <h2 className='text-center text-primary'>Home Page</h2>
      {/* <div className='pt-2'>
        <div className='text-center m-2'>
          <img src={teamwork} alt='logo-main' className='w-25 h-25' />
        </div>
        <div className='mt-2'>
          <div>
            <h2>
              WelCome : {firstname}
              {lastname}
            </h2>
          </div>
          <div>
            <input
              type='button'
              className='btn btn-danger m-2'
              value='Logout'
              onClick={(e) => LogoutClick(e)}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
