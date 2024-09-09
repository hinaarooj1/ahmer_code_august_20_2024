import React, { useState, useEffect } from 'react';
import Navbar from './Dashboardd/Navbar.jsx';
import Header2 from './Dashboardd/header2.js';
import CustomCursor from '../components/CustomCursor.js';
import video from '../assets/images/dapp.mp4';
import './Dashboardd/dashboard.css';

function R1000VR({ text }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
    const [animatedText, setAnimatedText] = useState("");

    useEffect(() => {
        let newText = "";
        for (let i = 0; i < text.length; i += 1) {
            newText += `<i>${text.charAt(i)}</i>`;
        }
        setAnimatedText(newText);

        const wrappedChars = document.getElementsByTagName("i");
        let j = 0;

        function addEffect() {
            setTimeout(() => {
                wrappedChars[j].className = "fly-in-out";
                j += 1;
                if (j < wrappedChars.length) {
                    addEffect();
                } else {
                    setTimeout(() => {
                        for (let k = 0; k < wrappedChars.length; k += 1) {
                            wrappedChars[k].className = "";
                        }
                        j = 0;
                        addEffect();
                    }, 2210);
                }
            }, 200);
        }

        addEffect();
    }, [text]);



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
            <div className='main-div-dashboard' style={{ overflowY: 'hidden' }}>
                <div className="container staking-container">
                    <iframe className='iframe-r100vr' height={514} src="https://www.youtube.com/embed/ms2U8E6vtq4" title="Vector Seven - Skynet" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
            </div>
        </>
    );
}




export default R1000VR;