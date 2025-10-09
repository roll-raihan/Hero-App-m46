import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-gray-300 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="hover:text-black hover:font-bold">Apps</a>
                    <a className="hover:text-black hover:font-bold">Installation</a>
                    <a className="hover:text-black hover:font-bold">Marketing</a>
                    <a className="hover:text-black hover:font-bold">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="hover:font-bold hover:text-black">About us</a>
                    <a className="hover:font-bold hover:text-black">Contact</a>
                    <a className="hover:font-bold hover:text-black">Jobs</a>
                    <a className="hover:font-bold hover:text-black">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <FaTwitter />
                        <FaYoutube />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </nav>
            </footer>
            <div className='bg-gray-300'>
                <p className='text-center border-t-1 border-gray-500 ml-5 mr-5'>
                    Copyright © 2025 - All right reserved || Published By: RAIHAN
                </p>
            </div>
        </>
    );
};

export default Footer;