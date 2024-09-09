import React, { useState, useEffect } from 'react';
import Navbar from '../Dashboardd/Navbar.jsx';
import Header2 from '../Dashboardd/header2.js';
import CustomCursor from "../../components/CustomCursor";
import video from '../../assets/images/dapp.mp4';
import portal from '../../assets/boostportal.png';
import './navboost.css';
import footerVideo from "../../assets/new_image/footer-video-navboost.mp4";
import PHWallet from "../../components/walletBuy";
function Navboost() {
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
        <>
            <CustomCursor />
            <video className="dashboard-video" src={video} autoPlay muted loop></video>
            <div className="dashboard-main-box">
                <Navbar style={navbarStyle} />
                <Header2 style={header2Style} />
            </div>
            <div className='sidebar-navbar-rest-area'>
                <div className="navboost-main">
                    <div className="title">
                        <h1>BOOST STATION</h1>
                        <span style={{fontSize:'14px'}}>Each week the team selects boost packages and invites the communiy to vote on which one will be uploaded into the the R1000 algorithm</span>
                        <br />
                        <br />
                        <span>Each week the team selects boost packages and invites <br/> the communiy to vote on which one will be uploaded into <br/> the the R1000 algorithm</span>
                    </div>

                    {/* <div className='mid-section-navboost'>
                        <div>
                            <h4>MARKETING</h4>
                            <br />
                            <br className='d-sm-block d-none'/>
                            <div className="red-box">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <br />
                            <br className='d-sm-block d-none'/>
                            <h4>GRAPHICS</h4>
                        </div>
                        <div>
                            <div className='videobox' style={{ backgroundImage: `url(${portal})` }}>
                            
                            </div>
                            <div className="five-circle">
                                <div>1</div>
                                <div>1</div>
                                <div>1</div>
                                <div>1</div>
                                <div>1</div>
                            </div>
                        </div>
                        <div>
                            <h4>UTILITY</h4>
                            <br />
                            <br className='d-sm-block d-none'/>
                            <div className="red-box">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <br />
                            <br className='d-sm-block d-none'/>
                            <h4>EXCHANGE</h4>
                        </div>
                    </div> */}

                    <div className="footer-navboost">
                        <span style={{fontSize:'25px'}}>Donate to next weeks boost package</span>
                        <h4>Connect to Telegram to cast your vote for the weely boost package!</h4>
                       <br/>
                        <div className="connect-overlay-box" >
                        <div className="bottom" >
                          <div className="btn-wrapper">
                            <button className="" style={{ width: '200px', display: "flex", alignItems: "center", justifyContent: 'center', padding: '0' }}>
                              <PHWallet/>
                              <div class="lava" style={{ border: "5px", borderColor: "white" }}>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navboost
