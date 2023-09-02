/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
            <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqLROK3HZMOi-8aauDabdfngqqHH20Cyquw&usqp=CAU" alt="" />
            </div>
            <div className='mt-10 flex items-center justify-center'>
            <h1 className=' text-4xl text-purple-800 font-semibold'>404 Not Found</h1><br />
            
        </div>
        <div className='flex items-center justify-center'>

        <button className='px-3 py-2 bg-purple-600 text-white rounded-lg mt-10' onClick={handleBack} >Go back</button>
        </div>
        </div>
        
    );
};

export default ErrorPage;