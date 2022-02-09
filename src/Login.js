import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signUp, login, auth } from './firebase';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn (e) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      if (auth) {
        navigate.push('/')
      }
    } catch(error) {
      alert(error.message);
    }
    setLoading(false);
  }

  async function register (e) {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
      if (auth) {
        navigate.push('/')
      }
    } catch(error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return(
    <div className='login'>
      <Link to="/">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="login__signInButton" onClick={signIn} type="submit">Sign In</button>
        </form>

        <p>
          By signing-in you agree to FEMI'S AMAZON CLONE Conditions of Use & Sale. 
          Please see our Privacy Notice, our Cookies Notice and our Interest-Based 
          Ads Notice.
        </p>

        <button className="login__registerButton" disabled={loading} onClick={register}>Create your Amazon Account</button>
      </div>

    </div>
  );
}

export default Login;
