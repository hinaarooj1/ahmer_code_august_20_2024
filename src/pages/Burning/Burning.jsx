import coinsburning from '../../assets/new_image/coinsburning.png';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Dashboardd/Navbar.jsx';
import Header2 from '../Dashboardd/header2.js';
import CustomCursor from "../../components/CustomCursor";
import video from '../../assets/images/dapp.mp4';
import '../Dashboardd/dashboard.css';
import Typed from 'typed.js';

export const Burning = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
    const analysisRef = useRef(null);
    const trackingRef = useRef(null);
    const reportRef = useRef(null);
    const viewRef = useRef(null);



    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1440);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navbarStyle = {
        display: isSmallScreen ? 'none' : 'flex',
        zIndex: 5,
    };

    const header2Style = {
        display: isSmallScreen ? 'block' : 'none',
    };

    return (
        <>
            <CustomCursor />
            <video className="dashboard-video" src={video} autoPlay muted loop></video>
            <div className="dashboard-main-box">
                <Navbar style={navbarStyle} />
                <Header2 style={header2Style} />
            </div>
            <div className='burning-main-box'>
                <div className='container '>
                    <div className="row">
                        <div className="w-100 text-center h1 p-5">
                            <h1 style={{ fontFamily: 'Terminator' }}>Burning</h1>
                        </div>
                        <div className="col-md-4  text-center">
                            <h4 style={{ fontFamily: 'Terminator' }} className='h3'>Total Supply</h4>
                            <span style={{ fontSize: '28px' }}>1,000,000,000</span>
                        </div>
                        <div className="col-md-4  text-center">
                            <h4 style={{ fontFamily: 'Terminator' }} className='h3'>Coins Burned</h4>
                            <span style={{ fontSize: '28px' }}>2.042</span>
                        </div>
                        <div className="col-md-4 text-center">
                            <h4 style={{ fontFamily: 'Terminator' }} className='h3'>Burned %</h4>
                            <span style={{ fontSize: '28px' }}>0.452%</span>
                        </div>
                    </div>
                    <div>
                        <img src={coinsburning} alt="" />
                    </div>
                    {/* <div className="burning-view" ref={viewRef}>
                        <div className='outer-frame custom-text-uppercase'>
                        </div>
                    </div> */}
                </div>
            </div>
        </>

    )
}
