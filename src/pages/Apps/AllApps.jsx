import React, { useEffect, useMemo, useState } from 'react';
import App from './App/App';
import { Navigate, useLoaderData, useNavigate } from 'react-router';
import AppNotFound from '../AppNotFound/AppNotFound';

const AllApps = () => {

    const data = useLoaderData();
    // console.log(data);

    //for loading while searching
    const [loading, setLoading] = useState(false);
    //for search
    const [query, setQuery] = useState("");
    const normalizedQuery = query.trim().toLowerCase();
    const navigate = useNavigate();
    const filteredApps = useMemo(() => {
        if (!normalizedQuery) return data;
        return data.filter((app) => {
            // guard: title might be missing
            const title = (app.title || "").toLowerCase();
            return title.includes(normalizedQuery);
        });
    }, [data, normalizedQuery]);
    useEffect(() => {
        if (normalizedQuery && filteredApps.length === 0) {
            const timeout = setTimeout(() => {
                navigate("/appNotFound", { replace: true });
            }, 500); // add small delay for smooth
            return () => clearTimeout(timeout);
        }
    }, [normalizedQuery, filteredApps, navigate]);
    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false); // stop loading after short delay
            }, 500); // 0.5s loading effect
            return () => clearTimeout(timer);
        }
    }, [loading]);


    return (
        <div className='bg-gray-100 p-5'>
            <h1 className='text-3xl font-bold text-center'>Our All Applications</h1>
            <p className='text-center mt-2 mb-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center mr-10 ml-10'>
                <h3 className='text-xl font-bold'>({data.length}) App Found</h3>
                <label className="input">
                    <div className='flex gap-2 items-center'>
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
                        <div className='flex flex-col gap-5'>
                            <input type="search" required value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setLoading(true);
                                }
                                }
                                placeholder="Search" />
                            {
                                normalizedQuery && (
                                    <div className=' absolute mt-10'>
                                        {loading ?
                                            (
                                                // 🌀 Show loading animation
                                                <div className="flex justify-center items-center p-4">
                                                    <div className="w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                                                    <span className="ml-2 text-gray-600">Searching...</span>
                                                </div>
                                            ) :
                                            (filteredApps.length > 0
                                                ?
                                                <ul className='end-0'>
                                                    {
                                                        filteredApps.map(app => (
                                                            <li key={app.id} className="p-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition bg-white text-black mb-2">
                                                                {app.title}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                :
                                                (<AppNotFound></AppNotFound>))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
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