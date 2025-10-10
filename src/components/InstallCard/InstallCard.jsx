// import { useEffect } from 'react';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingIcon from '../../assets/icon-ratings.png';
import { toast } from 'react-toastify';

const InstallCard = ({ app, setInstall }) => {

    const { image, title, downloads, ratingAvg, size, id } = app;

//     useEffect(() => {
//     const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     setInstall(apps);
//   }, []);

    const handleUninstall = (id) => {
        toast("uninstalled.");

        const installedApps = JSON.parse(localStorage.getItem("installedApps") || []);
        const updated = installedApps.filter((appId) => appId !== id);
        localStorage.setItem("installedApps", JSON.stringify(updated));

        if (setInstall) {
            setInstall(updated);
        }
    }

    return (
        <div className='bg-white p-2 rounded-2xl flex justify-between items-center shadow-xl'>
            <div className='flex gap-2'>
                <div className='bg-gray-200 rounded-xl'>
                    <img src={image} alt="" className='w-3/4 m-auto md:h-[100px] md:w-[100px] p-3 rounded-2xl' />
                </div>
                <div className='flex flex-col justify-between p-2'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div className='flex gap-2 flex-col md:flex-row justify-center'>
                        <p className='btn'><img src={downloadIcon} alt="" className='h-[20px] w-[20px]' /> {downloads}</p>
                        <p className='btn'><img src={ratingIcon} alt="" className='h-[20px] w-[20px]' /> {ratingAvg}</p>
                        <p className='btn'>{size}MB</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleUninstall(id)} className='btn btn-accent text-white'>Uninstall</button>
        </div>
    );
};

export default InstallCard;