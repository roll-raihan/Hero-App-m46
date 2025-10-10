import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png'
import { NavLink } from 'react-router';

const TrendingApp = ({ app }) => {

    const { image, downloads, ratingAvg, title, id } = app;

    return (
        <NavLink to={`/detail/${id}`}>
            <div className='bg-white p-4 rounded-2xl shadow-2xl'>
                <div className='bg-gray-300 rounded-xl p-4'>
                    <img src={image} alt="App Image" className='w-1/3 mx-auto' />
                </div>
                <div className='font-bold text-xl m-2 text-center'>
                    <h3>{title}</h3>
                </div>
                <div className='flex justify-between m-2'>
                    <button className='btn'>
                        <img src={downloadIcon} alt="Download Icon" className='w-[20px] h-[20px]' /> {downloads}
                    </button>
                    <button className='btn'>
                        <img src={ratingIcon} className='w-[20px] h-[20px]' alt="Rating Icon" /> {ratingAvg}
                    </button>
                </div>
            </div>
        </NavLink>
    );
};

export default TrendingApp;