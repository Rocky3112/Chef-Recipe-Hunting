/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthCotext } from '../../Provider/AuthProvider';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from '../../../Firebase/firebase.config';

const Login = () => {
  const[error, setError] =useState("");
    const { signIn } = useContext(AuthCotext)
  // console.log(signIn);
  const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
  const from = location.state?.from?.pathname || '/'


    const handleLogin = event =>{
        event.preventDefault()
        setError('')
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
          const loggedUser =result.user;
          console.log(loggedUser)
          navigate(from, { replace: true })
          form.reset('')

        })
        .catch(error=>{
          console.log(error);
          setError("Please enter the correct Email & Password")
        })
        
    }

    //Google and GitHub

    const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
      });
  };


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
            {/* <div>{user && <span>{user.displayName}</span>}</div> */}

          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <p className=' text-red-500'>{error}</p>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <Link to="/register" className='link link-primary'>
       Reister Now
        </Link>
    </div>
    <div className="w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" w-72"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          onClick={handleGithubLogin}
          className="w-72 my-5"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;