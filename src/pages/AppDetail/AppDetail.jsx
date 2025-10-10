import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import reviewIcon from '../../assets/icon-review.png';
import { addToStoredDB } from '../../utility/addToDB';
import { ToastContainer } from 'react-toastify';


const AppDetail = () => {
    const { id } = useParams();
    // console.log(typeof id);
    const convertId = parseInt(id);

    const data = useLoaderData();
    // console.log(data)
    const singleApp = data.find(app => app.id === convertId);

    // console.log(singleApp); , ratings

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads } = singleApp;

    //install btn function
    const [installed, setInstalled] = useState(false);
    const [loading, setLoading] = useState(false);

    //check if already installed
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (installedApps.includes(singleApp.id)) {
            setInstalled(true);
        }
    }, [singleApp.id]);

    const handleInstall = async (id) => {
        if (installed || loading) return;
        setLoading(true);
        addToStoredDB(id);

        await new Promise((r) => setTimeout(r, 800));
        setInstalled(true);
        setLoading(false);
        // localStorage.setItem("myAppInstalled", "true"); //to set in local storage if not exist

        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (!installedApps.includes(id)) {
            installedApps.push(id);
            localStorage.setItem("installedApps", JSON.stringify(installedApps));
        }
    }

    return (
        <div className='bg-gray-100 p-10'>
            <div className='flex gap-10 flex-col  md:flex-row border-b-1 border-gray-400 mb-5'>
                <div className='bg-white mb-2 max-h-[400px] max-w-[400px]'>
                    <img src={image} alt="App Icon" className='w-2/3 p-4 mx-auto' />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mt-2 mb-2'>{title}</h1>
                    <p className='mb-3'>Developed by <span className='font-bold text-purple-600'>{companyName}</span></p>
                    <div className='border-t-1 border-gray-400'></div>
                    <div className='flex flex-col md:flex-row gap-7 mt-2 mb-2'>
                        <div>
                            <img src={downloadIcon} alt="Download Icon" className='w-[30px] h-[30px]' />
                            <p>Downloads</p>
                            <h1 className='text-xl font-bold'>{downloads}</h1>
                        </div>
                        <div>
                            <img src={ratingIcon} alt="Ratings Icon" className='w-[30px] h-[30px]' />
                            <p>Average Ratings</p>
                            <h1 className='text-xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={reviewIcon} alt="Review Icon" className='w-[30px] h-[30px]' />
                            <p>Total Reviews</p>
                            <h1 className='text-xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <ToastContainer />
                    <button onClick={() => handleInstall(singleApp.id)} disabled={installed || loading}
                        // aria-disabled={installed || loading}
                        // aria-pressed={installed} 
                        className='btn btn-accent text-white mt-2 mb-3'>{installed ? "Installed" : loading ? "Installing..." : "Install"} ({size}MB)</button>
                </div>
            </div>
            <div className='border-b-1 border-gray-400'>
                <h1 className='text-xl font-bold mb-3'>Ratings</h1>
            </div>
            <div className='mb-10'>
                <h1 className='text-xl font-bold mb-3 mt-3'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetail;