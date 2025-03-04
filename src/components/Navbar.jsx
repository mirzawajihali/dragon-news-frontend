import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/images/user.png';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between my-10'>
            <div>

            </div>
            <div >
                    <ul className='flex space-x-4'>
                        <Link to="/">Homes</Link>
                        <Link to="/about">About</Link>
                        <Link to="/career">Career</Link>
                        
                    </ul>
                </div>

                <div className='login flex items-center space-x-4'>
                    <img src={userIcon}
                    className='w-8 h-8' alt="user" />   
                    <button className='btn btn-neutral'>Login</button>

                </div>
        </div>
    );
};

export default Navbar;