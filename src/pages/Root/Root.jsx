import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    // useNavigation used for showing loading animation while changing routes
    const navigation = useNavigation();
    // Optional: If you want to show loading at least for some fixed moment(like 0.5s, 5s) then:
    //1. useState --> by default (false)
    //2. useEffect(()=>{side effect logic},[dependencies])

    return (
        <div>
            <NavBar></NavBar>
            {/* for loading animation */}
            {navigation.state === "loading" && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
                    <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;