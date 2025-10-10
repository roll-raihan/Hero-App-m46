import { toast } from "react-toastify";

const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("readList");

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else {
        return [];
    }
}


const addToStoredDB = (id) => {

    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        toast("Already Installed!!");
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("readList", data);
        // toast("Installed!!");
        // console.log(data)
    }
}

export { addToStoredDB, getStoredApp };