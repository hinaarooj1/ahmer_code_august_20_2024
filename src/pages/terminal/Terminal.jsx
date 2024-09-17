import React, { useState, useEffect } from 'react';
import Navbar from '../Dashboardd/Navbar.jsx';
import Header2 from '../Dashboardd/header2.js';
import CustomCursor from "../../components/CustomCursor";
const Terminal = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
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
        <div>
            <CustomCursor /> 
            <div className="dashboard-main-box">
                <Navbar style={navbarStyle} />
                <Header2 style={header2Style} />
            </div>
            <div className='sidebar-navbar-rest-area'>
                <div className="navboost-main">
                    <div className="title">
                        <h1>BOOST STATION</h1>
                        <span style={{ fontSize: '14px' }}>Each week the team selects boost packages and invites the communiy to vote on which one will be uploaded into the the R1000 algorithm</span>
                        <br />
                        <br />
                        <span>Each week the team selects boost packages and invites <br /> the communiy to vote on which one will be uploaded into <br /> the the R1000 algorithm</span>
                    </div>

                   
                    <div className="footer-navboost">
                        <span style={{ fontSize: '25px' }}>Donate to next weeks boost package</span>
                        <h4>Connect to Telegram to cast your vote for the weely boost package!</h4>
                        <br />
                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
