import moment from 'moment';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-8'>
            
            <div className='space-y-2'>
                          
            <img src={logo} className='w-[400px]' alt="logo" />
              <h1 className='text-gray-600 text-center font-bold' >Journalism Without Fear or Favour!</h1>
              <p className='text-gray-600 text-center '>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
                <nav>
                    <ul className='flex space-x-4'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            
        </div>
    );
};

export default Header;