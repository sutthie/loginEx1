/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
// import { Redirect } f rom "react-router-dom";

const Profile = ({ login }) => {
  const history = useHistory();
  useEffect(() => {
    // if (!login) {
    //   history.push("/");
    // }
    if (!login) {
      history.push('/about');
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();

  // const match = useRouteMatch();
  // console.log(match.url + ' : ' + match.path);

  // alt + 96 `

  return (
    <div className="container">
      <h2 className="text-center text-primary">Profile Page</h2>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </div>
  );
};

export default Profile;
