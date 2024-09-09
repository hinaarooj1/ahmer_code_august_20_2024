import React, { useState, useEffect, useRef } from 'react';
import { CiWallet } from "react-icons/ci";
import './dashboard.css';
import Navbar from './Navbar';
import Header2 from './header2.js';
import CustomCursor from '../../components/CustomCursor.js';
import video from '../../assets/images/dapp.mp4';
import { TbSwitchVertical } from "react-icons/tb";
import { Box, Grid } from '@mui/material';
import connect from '../../assets/boxes/connect.png'
import Dashboadtypingeffect from '../../components/dashboardtypingeffect.js';
import Typed from 'typed.js';
// --- --- ---  Constants to set coin prices --- --- --- //


const Dashboard = () => {
  const [solPrice, setSolPrice] = useState(null);
  const [rayPrice, setRayPrice] = useState(null);
  const [solPriceChange, setSolPriceChange] = useState(null);
  const [rayPriceChange, setRayPriceChange] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
  // --- --- --- Functions to fetch Solana and Raydium: Current prices, price changes, (SOON TO ADD: Historical data to build linear graphs) --- --- --- //
  const analysisRef = useRef(null);
  const trackingRef = useRef(null);
  const reportRef = useRef(null);
  const viewRef = useRef(null);

  const fetchSolanaPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
      const data = await response.json();
      const solPrice = data.solana.usd;
      const solPriceChange = data.solana.usd_24h_change;
      setSolPrice(solPrice);
      setSolPriceChange(solPriceChange);
    } catch (error) {
      console.error('Error fetching Solana price:', error);
    }
  };

  const fetchRaydiumPrice = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=raydium&vs_currencies=usd&include_24hr_change=true');
      const data = await response.json();
      const rayPrice = data.raydium.usd;
      const rayPriceChange = data.raydium.usd_24h_change;
      setRayPrice(rayPrice);
      setRayPriceChange(rayPriceChange);
    } catch (error) {
      console.error('Error fetching Raydium price:', error);
    }
  };


  useEffect(() => {
    fetchSolanaPrice();
    fetchRaydiumPrice();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (viewRef.current) {
        viewRef.current.classList.remove('filter-red_blur');
      }
    }, 500);

    const typedReport = new Typed(reportRef.current, {
      strings: [
        "^2000<p>......</p>",
        "<p>scan mode 43894</p><p>size assement</p><p>assesment complete<br></p><p>fit probability 0.99<br></p><p>reset to aquisition<br>mode speech level 78<br></p><p>priority override</p><p>defense systems set</p><p>active status</p><p>level 2347923 max</p>",
      ],
      showCursor: false,
      loop: false,
    });

    const analysisString =
      "^4000<h2>analysis:</h2>^1000<p class='glitch' data-text='6546546465461'>6546546465461</p>^200<p class='glitch' data-text='8989000054545'>8989000054545</p>^200<p class='glitch' data-text='5699878225255'>5699878225255</p>^200<p class='glitch' data-text='0233255714589'>0233255714589</p><p class='glitch' data-text='9412323687985'>9412323687985</p><p class='glitch' data-text='8885575522255'>8885575522255</p><p class='glitch' data-text='5646484513248'>5646484513248</p><p class='glitch' data-text='6546626233653'>6546626233653</p>";
    const typedAnalysis = new Typed(analysisRef.current, {
      strings: [analysisString],
      loop: false,
      showCursor: false,
      typeSpeed: 0,
      onComplete: () => {

        const typedTracking = new Typed(trackingRef.current, {
          strings: ["^1000<span>match</span> <span class='square'>&#9632;</span>"],
          loop: false,
          showCursor: false,
          typeSpeed: 50,
          onComplete: () => {

            setInterval(() => {
              if (analysisRef.current) {
                const glitchElements =
                  analysisRef.current.querySelectorAll("p.glitch");
                glitchElements.forEach((element) => {
                  const newText = element.textContent.replace(/\d/g, () =>
                    Math.floor(Math.random() * 9) + 1
                  );
                  element.textContent = newText;
                  element.setAttribute("data-text", newText);
                });
              }
            }, 50);
          },
        });
      },
    });

    return () => {
      clearTimeout(timeoutId);
      typedReport.destroy();
      typedAnalysis.destroy();
    };
  }, []);


  // const h1Ref = useRef(null);

  // const setShadow = () => {
  //   let displace = 0.2 + Math.random() * 1.7;
  //   const shadow = `${displace}px 0px 1px rgba(0, 70, 255, 0.6), ${-displace}px 0px 1px rgba(255, 50, 0, 0.6), 0 0 4px`;

  //   if (h1Ref.current) {
  //     h1Ref.current.style.textShadow = shadow;
  //   }
  // };

  // useEffect(() => {
  //   setShadow(); 
  //   const intervalId = setInterval(setShadow, 40);

  //   return () => clearInterval(intervalId);
  // }, []);

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


  // useEffect(() => {
  //   const setShadow = () => {
  //     let displace = 0.2 + Math.random() * 1.7;
  //     const shadow = `${displace}px 0px 1px rgba(0, 70, 255, 0.6), ${-displace}px 0px 1px rgba(255, 50, 0, 0.6), 0 0 4px`;
  //     document.body.style.textShadow = shadow;
  //   };

  //   setShadow();
  //   const interval = setInterval(setShadow, 40);

  //   return () => clearInterval(interval);
  // }, []);

  return (


    <div style={{ width:'100%', height:'100%'}}>
      <video
        className="dashboard-video"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className="dashboard-content m-0" style={{ maxWidth: '100vw' }}>
        <Header2 style={header2Style} />
        <Navbar style={navbarStyle} />
      </div>
      <div className="dashboard main-b">
        <CustomCursor />

        <div style={{ paddingTop:"30px"}} className="d-flex align-items-center h-100 justify-content-center dash-upper-box">
          <div className="dashboard-box dashboard-wrapper">
            <div id="noise"></div>
            <h1 id="h" className='text-center' style={{ fontFamily: "Termin-font" }}>Mainframe</h1>
            {/* <div class="line11"></div> */}
            <div>
              <div className="view filter-red_blur" ref={viewRef}>
                <div className='outer-frame custom-text-uppercase'>
                  <div className="custom-border-frame">
                    <div id="analysis" className="frame" ref={analysisRef}></div>
                    <div id="tracking" className='red-glow' style={{ fontFamily: "Share Tech Mono" }} ref={trackingRef}></div>
                    <div id="report" ref={reportRef}></div>
                  </div>
                </div>
              </div>

            </div>
            <div style={{ fontFamily: 'sharetechmono', textAlign: 'start', fontSize: '14px', padding: '35px 0 0 0' }}>
              <Dashboadtypingeffect />
            </div>
          </div>
        </div>
      </div>

      {/* --- --- ---  Creates background video --- --- --- */}


      {/* --- --- ---  Creates the Top Header / Nav Bar --- --- --- */}


      {/* <div className=" new-dashboard-box">
          <h2 className="newbox-text">.... R1000 Protocol intialized ....</h2>
          <h2 className="newbox-text">...</h2>
        </div> */}

      {/* <div class="d-sm-flex d-none marquee-container">
          <marquee direction="left" scrollamount="3" behavior="loop" class="marquee">
            R1000 Protocol Initiated
          </marquee>
        </div>



        <div className="d-sm-block d-none wallet-box">
          <p className="wallet-text"> <img src={connect} alt="nav-conect-wallet" style={{ width: '70%' }} /></p>
        </div> */}


      {/* --- --- ---  Text headers - being used for code notes--- you can ignore it for now --- --- --- */}
      {/*} <div className="dashboard-header">
          <h1>DASHBOARD STATS</h1>
          <p>Work in Progress (WIP)</p>
          <p className='transparent-text'>.</p>
        </div> */}

      {/* --- --- ---  Create Top Box - Currently cointains bitcoin information - static information --- --- --- */}
      {/* --- --- ---  divides the box into a grid to help seperate and organize data --- --- --- */}

      {/* <div className='line'></div> */}
      {/* <div ref={h1Ref} className="dashboard-box bg-dark transform-none transition-transform rounded p-5 w-100 position-relative z-2">
          <div className="coin-grid">
            <div className="row text-center">
              {[
                { label: 'BTC Price', value: '$0' },
                { label: 'BTC Circulating Supply / Total', value: '47,810 / 1,000,000' },
                { label: 'Market Cap', value: '$0.00' },
                { label: 'TVL', value: '$0.00' },
                { label: 'APR', value: '68.15%' },
                { label: 'Treasury Value', value: '$0.00' },
              ].map((item, index) => (
                <div className="col-12 col-sm-4 mb-3" key={index}>
                  <div className="d-flex flex-column align-items-center w-100">
                    <div className="g-col-4-header w-100">{item.label}</div>
                    <div className="font-weight-bold g-col-4 text-2xl w-100">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}



    </div>
  );
};

export default Dashboard;
