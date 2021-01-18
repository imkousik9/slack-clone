import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: 'SET_USER',
          user: result.user
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Kousik Manna's Team</h1>
        <p>kousik.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
