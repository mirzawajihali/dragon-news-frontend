import React from 'react';
import swimming  from "../assets/images/swimming.png"
import playground  from "../assets/images/playground.png"
import classroom  from "../assets/images/class.png"

const QZone = () => {
    return (
        <div className='bg-gray-100 rounded-md mt-6 p-10'>
            <h1 className='text-xl font-bold '>Q-Zone - </h1>
           <div className='flex flex-col gap-10 mt-10'>
           <img className='' src={swimming} alt="" />
           <img className='' src={playground} alt="" />
           <img className='' src={classroom} alt="" />
           </div>
        </div>
    );
};

export default QZone;