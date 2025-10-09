import React from 'react';
import App from './App/App';
import { useLoaderData } from 'react-router';

const AllApps = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div className='bg-gray-100 p-5'>
            <h1 className='text-3xl font-bold text-center'>Our All Applications</h1>
            <p className='text-center mt-2 mb-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center mr-10 ml-10'>
                <h3 className='text-xl font-bold'>({data.length}) App Found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 pt-2 m-5'>
                {
                    data.map((app) => <App app={app} key={app.id}></App>)
                }
            </div>
        </div>
    );
};

export default AllApps;