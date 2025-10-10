import React from 'react';
import appNotFound from '../../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col p-10 bg-gray-200 h-full'>
            <div className=''>
                <img src={appNotFound} alt="Error. App Not Found" className='' />
            </div>
            <div className='flex flex-col justify-center items-center p-2'>
                <h1 className='text-4xl font-bold mt-2 mb-2 text-center'>OPPS!! APP NOT FOUND</h1>
                <p className='text-center mb-2'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/installation">
                    <button className='btn btn-primary'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default AppNotFound;