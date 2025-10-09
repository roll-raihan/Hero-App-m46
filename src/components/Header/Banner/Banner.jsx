import React from 'react';
import { Link } from 'react-router';
import googlePlay from '../../../assets/playStore.png';
import appStore from '../../../assets/appStore.png';
import hero from '../../../assets/hero.png'

const Banner = () => {
    return (
        <div className=''>
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
        </div>
    );
};

export default Banner;