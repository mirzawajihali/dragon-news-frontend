import moment from 'moment';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-8 '>
            
            <div className='space-y-2'>
                          
          <Link to='/'>  <img src={logo} className='w-[400px]' alt="logo" /></Link>
              <h1 className='text-gray-600 text-center font-bold' >Journalism Without Fear or Favour!</h1>
              <p className='text-gray-600 text-center '>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
              
            
        </div>
    );
};

export default Header;