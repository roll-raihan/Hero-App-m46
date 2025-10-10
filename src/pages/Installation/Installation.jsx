import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import InstallCard from '../../components/InstallCard/InstallCard';

const Installation = () => {

    const data = useLoaderData();

    //install uninstall state part-1
    const [install, setInstall] = useState([]);

    //sort state
    const [sort, setSort] = useState("");
    const handleSort = (type) => {
        setSort(type);
        if (type === "high") {
            const sortedByHigh = [...install].sort((a, b) => b.size - a.size);
            setInstall(sortedByHigh);
        }
        if (type === "low") {
            const sortedByHigh = [...install].sort((a, b) => a.size - b.size);
            setInstall(sortedByHigh);
        }
        
    }
    //install uninstall state part-2
    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApp = storedAppData.map(id => parseInt(id));
        const myInstallation = data.filter(app => convertedStoredApp.includes(app.id));
        // console.log(myInstallation);
        setInstall(myInstallation);
    }, [])

    return (
        <div className='bg-gray-100 p-5'>
            <h1 className='text-3xl font-bold text-center'>My Installed Apps</h1>
            <p className='text-center mt-2 mb-2'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center mr-10 ml-10'>
                <h3 className='text-xl font-bold'>({install.length}) App Found</h3>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size: {sort ? sort : ""} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-45 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("high")}>High-Low</a></li>
                        <li><a onClick={() => handleSort("low")}>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    install.map((app,index) => <InstallCard setInstall={setInstall} key={index} app={app}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default Installation;