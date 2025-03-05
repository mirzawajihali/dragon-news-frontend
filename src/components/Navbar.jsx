import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/images/user.png';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='w-11/12 mx-auto  flex flex-col  md:flex-row items-center justify-between my-10'>
            <div>
                <img src={logo} className='w-[150px]' alt="" />
                
            </div>
            <div  className=''>
                    <ul className='flex space-x-4 '>
                        <Link to="/">Homes</Link>
                        <Link to="/about">About</Link>
                        <Link to="/developer">Developer</Link>
                        
                        
                    </ul>
                </div>

                <div className='login flex items-center space-x-4'>
                    {user && user?.email ?  <div className='flex gap-1 items-center '> <img  src={user.photoURL}
                    className='w-8 h-8 rounded-full' alt="user" /> 
                    <h1 className='font-bold'>{user.displayName}</h1> 
                    </div> :   <img src={userIcon}
                    className='w-8 h-8' alt="user" /> }
                   
                    {
                        user && user?.email ? 
                        
                        <button onClick={logOut} className='btn btn-neutral'>Log out</button>

                        : <button className='btn btn-neutral'><NavLink to='/auth/login'>Login</NavLink></button>
                    } 
                    

                </div>
        </div>
    );
};

export default Navbar;