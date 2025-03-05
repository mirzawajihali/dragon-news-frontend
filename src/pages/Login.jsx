import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { userLogin, setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {   
        e.preventDefault();
        const form = new FormData(e.target);
      
        const email = form.get('email');
        const password = form.get('password');
        
        console.log( email, password);
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
        })
        .catch(error =>{
           
               const errorMessage = error.message;
               alert( errorMessage);
         })
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            
            <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Login Your Account</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input  name='password' type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>

      <p className='text-center font-bold '>Dont have an account? <Link className='text-red-500' to="/auth/register">Register</Link></p>
    </div>
        </div>
    );
};

export default Login;