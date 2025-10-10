import React from 'react';
import img from '../../assets/demo-app (1).webp';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';

const Installation = () => {
    return (
        <div className='bg-gray-100 p-5'>
            <h1 className='text-3xl font-bold text-center'>My Installed Apps</h1>
            <p className='text-center mt-2 mb-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center mr-10 ml-10'>
                <h3 className='text-xl font-bold'>() App Found</h3>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-45 p-2 shadow-sm">
                        <li><a>High-Low</a></li>
                        <li><a>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5'>
                <div className='bg-white p-2 rounded-2xl flex justify-between items-center shadow-xl'>
                    <div className='flex gap-2'>
                        <div className='bg-gray-200 rounded-xl'>
                            <img src={img} alt="" className='w-3/4 m-auto md:h-[100px] md:w-[100px] p-3 rounded-2xl' />
                        </div>
                        <div className='flex flex-col justify-between p-2'>
                            <h2 className='text-xl font-bold'>Name</h2>
                            <div className='flex gap-2 flex-col md:flex-row justify-center'>
                                <p className='btn'><img src={downloadIcon} alt="" className='h-[20px] w-[20px]'/> 9M</p>
                                <p className='btn'><img src={ratingIcon} alt="" className='h-[20px] w-[20px]'/> 5</p>
                                <p className='btn'>258MB</p>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-accent text-white'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default Installation;