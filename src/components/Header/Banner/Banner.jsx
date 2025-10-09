import React from 'react';
import { Link } from 'react-router';
import googlePlay from '../../../assets/playStore.png';
import appStore from '../../../assets/appStore.png';
import hero from '../../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='text-4xl font-bold flex flex-col justify-center items-center p-5'>
                <h1>We Build</h1>
                <h1><span className='text-purple-600'>Productive</span> App</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
                <p>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3'>
                <a className='btn' href="https://play.google.com/store/games?device=windows"
                    target="_blank"
                    rel="noopener noreferrer"><img src={googlePlay} alt="google play" className='w-[20px] h-[20px]' /> Google Play</a>
                <a className='btn' href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"><img src={appStore} alt="google play" className='w-[20px] h-[20px]' /> App Store</a>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src={hero} alt="hero photo" className='w-2/4' />
            </div>
            <div className='bg-purple-500 text-white pt-8 pb-8'>
                <h1 className='text-3xl font-bold text-center text-wrap'>Trusted by Millions, Built for You</h1>
                <div className='flex gap-10 justify-center items-center m-5 flex-col md:flex-row'>
                    <div className='flex flex-col justify-center items-center'>
                        <p>Total Downloads</p>
                        <h1 className='text-4xl font-bold'>29.6M</h1>
                        <p>21% More Than Last Month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p>Total Reviews</p>
                        <h1 className='text-4xl font-bold'>906K</h1>
                        <p>46% More Than Last Month</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p>Active Apps</p>
                        <h1 className='text-4xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;