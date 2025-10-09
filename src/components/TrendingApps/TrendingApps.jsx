import React from 'react';
import TrendingApp from './TrendingApp';
import { useLoaderData } from 'react-router';

const TrendingApps = () => {

    const data = useLoaderData();
    // console.log(data)

    return (
        <div className='m-10'>
            <h1 className='text-3xl font-bold text-center mb-2'>Trending Apps</h1>
            <p className='text-center mb-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 pt-2'>
                {
                    data.map((app)=><TrendingApp app={app} key={app.id}></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;