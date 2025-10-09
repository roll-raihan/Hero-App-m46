import React from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';

const AppDetail = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='bg-gray-100 p-10'>
            <div className='flex gap-10 flex-col  md:flex-row border-b-1 border-gray-400 mb-5'>
                <div className='bg-white mb-2 max-h-[400px] max-w-[400px]'>
                    <img src="https://i.ibb.co.com/fYrFBpsX/image.png" alt="App Icon" className='w-2/3 p-4 mx-auto' />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mt-2 mb-2'>SmPlan:ToDo List with Reminder</h1>
                    <p className='mb-3'>Developed by productive.io</p>
                    <div className='border-t-1 border-gray-400'></div>
                    <div className='flex flex-col md:flex-row gap-7 mt-2 mb-2'>
                        <div>
                            <img src={downloadIcon} alt="Download Icon" className='w-[30px] h-[30px]' />
                            <p>Downloads</p>
                            <h1 className='text-xl font-bold'>8M</h1>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="Ratings Icon" className='w-[30px] h-[30px]' />
                            <p>Average Ratings</p>
                            <h1 className='text-xl font-bold'>4.9</h1>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="Review Icon" className='w-[30px] h-[30px]' />
                            <p>Total Review</p>
                            <h1 className='text-xl font-bold'>54K</h1>
                        </div>
                    </div>
                    <button className='btn btn-accent text-white mt-2 mb-3'>Install Now (291MB)</button>
                </div>
            </div>
            <div className='border-b-1 border-gray-400'>
                <h1 className='text-xl font-bold mb-3'>Ratings</h1>
            </div>
            <div className='mb-10'>
                <h1 className='text-xl font-bold mb-3 mt-3'>Description</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus.</p>
            </div>
        </div>
    );
};

export default AppDetail;