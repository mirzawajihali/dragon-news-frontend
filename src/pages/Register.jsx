import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createNewUser,  setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const image = form.get('image');
        console.log(name, email, password, image);
        createNewUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
        })
        .catch(error =>{
           const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            
        <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 shrink-0 shadow-2xl">
            <h1 className="text-2xl font-semibold text-center">Register Your Account</h1>
  <form onSubmit={handleSubmit} className="card-body">
    <fieldset className="fieldset">
      <label className="fieldset-label">Your Name</label>
      <input name='name' type="text" className="input w-full" placeholder="Your Name" />
    
      <label className="fieldset-label">Image URL</label>
      <input name='image' type="text" className="input w-full" placeholder="Image URL" />
  
      <label className="fieldset-label">Email</label>
      <input name='email' type="email" className="input w-full" placeholder="Email" />
      <label className="fieldset-label">Password</label>
      <input name='password' type="password" className="input w-full" placeholder="Password" />
      
      <button type='submit' className="btn btn-neutral mt-4">Register</button>
    </fieldset>
  </form>

  <p className='text-center font-bold '>Already have an account? <Link className='text-red-500' to="/auth/login">Login</Link></p>
</div>
    </div>
    );
};

export default Register;