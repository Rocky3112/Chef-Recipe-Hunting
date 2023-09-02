/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthCotext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const {user, createUser,updateUser} = useContext(AuthCotext)
    const[error, setError] =useState("");
    // console.log(createUser);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
  // const from = location.state?.from?.pathname || '/'

  const handleRegister = event =>{
    event.preventDefault()

    const form = event.target;
    const name= form.name.value;
    const email= form.email.value;
    const password= form.password.value;
    const photo= form.photo.value;

    console.log(name ,email, password)

    if(password.length<6){
      setError("Password must be 6 characters");
      
      return;
    }
    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;

      updateUser(loggedUser, name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
      console.log(loggedUser);
      form.reset('')
      setError('')
      // navigate(from, { replace: true })

    
    })
    .catch(error =>{
      console.log(error);
      
    })

    
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile URL</span>
          </label>
          <input type="text" name='photo' placeholder="profile url" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <p className=' text-red-400'>{error}</p>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <Link to="/login" className='link link-primary'>
       Already have an account? Login
        </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;