import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../../firebase.js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault(); 
    
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
       
        history.push('/'); 
      })
      
      .catch((e) => alert(e.message));

    toast.dark('✅ Login Successfull!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const register = (e) => {
    e.preventDefault(); 
    
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        
        history.push('/'); 
      })
     
      .catch((e) => alert(e.message));
    toast.dark('✅ Registeration Successfull!', {
      position: 'top-center',
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ozaNy_UW7jGdhNhXlTzE2z2BnCgs1aZKUQ&usqp=CAU"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In/Up</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In Securely
          </button>
        </form>
        <p>
          By signing-in you agree to the YourLife Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        
      </div>
    </div>
  );
}

export default Login;
