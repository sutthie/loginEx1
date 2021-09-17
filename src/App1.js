import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import NotFound from "./Pages/NotFound";

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {/* <BrowserRouter basename='/tutorial'> */}
      {/* <BrowserRouter forceRefresh> */}
      <BrowserRouter>
        <div className='App'>
          <div className='m-5 p-5'>
            <Header />
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            {/* <Route path='/profile'>
              {login ? <Profile /> : <Redirect to='/' />}
            </Route> */}
            <Route path='/profile' component={Profile}>
              <Profile login={login} />
            </Route>
            <Route path='/post/:id' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      <div className='text-center fixed-bottom p-5'>
        <button
          className={login ? "btn btn-danger" : "btn btn-primary"}
          onClick={() => setLogin(!login)}
        >
          {login ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default App;
