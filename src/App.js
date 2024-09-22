import "./assets/index.css";
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/landing";
import LiteLanding from "./pages/liteLanding";

import { useMusic } from "./utils/MusicContext.js";
import Memenator from "./pages/memenator";
import DApp from "./pages/dashboard";
import music from "./assets/music/music.mp3";
import Comingsoon from "./pages/comingsoon";
import './pages/loader.css'
import R1000VR from "./pages/R1000VR";
import Dashboard from "./pages/Dashboardd/Dashboardd";
import Loader from "./pages/Loader.js";
import Ticket from "./pages/Ticket.jsx";
import Type from "./pages/typed.js";
import Slot from "./pages/slot/page.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Burning } from "./pages/Burning/Burning";
import Navboost from "./pages/navboost/Navboost.jsx";
import Media from "./pages/media/Media.jsx";
import Terminal from "./pages/terminal/Terminal.jsx";
import Admin from "./pages/admin/Admin.jsx";
import './app.css'
import { Staking } from "./pages/Staking/Staking";
import UploadMedia from "./pages/admin/uploadMedia.jsx";
import './slide-loader.css'
import { MusicProvider } from "./utils/MusicContext.js";

const App = () => {

  const audioRef = useMusic();
  const [loading, setLoading] = useState(false); // Initially not loading
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {

    const pathsWithLoader = ["/"];

    if (pathsWithLoader.includes(location.pathname)) {
      document.body.style.color = "#db0e15";
      document.body.style.fontFamily = "'Share Tech Mono', monospace";
      document.body.style.cursor = "default";

      document.body.style.fontWeight = "300";
      document.body.style.textShadow = "0 0 5px rgba(219, 14, 21, .8)";
      document.body.style.background = "url(https://image.ibb.co/h2hLAJ/bg.png) #000";
      document.body.style.height = "100vh";

      setLoading(true);
      if (window.innerWidth < 768) {
        setTimeout(() => {
          // setLoading(false);
        }, 5000);
        return; // Exit early if screen size is less than 768px
      }

      if (location.pathname === "/lite") {
        setLoading(false);
        return


      }
      if (location.pathname === "/") {
        const video = document.querySelector('.home-sec-1 video');

        if (video) {
          const handleVideoLoad = () => {
            // setLoading(false);
          };

          // Check if the video is already loaded
          if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
            // setLoading(false);
          } else {
            video.addEventListener('loadeddata', handleVideoLoad);
          }

          return () => {
            video.removeEventListener('loadeddata', handleVideoLoad);
          };
        } else {
          // setLoading(false);
        }
      } else if (location.pathname === "/mainframe") {
        const handlePageLoad = () => {
          // setLoading(false);
        };

        // Check if the page is already loaded
        if (document.readyState === "complete") {
          // setLoading(false);
        } else {
          window.addEventListener('load', handlePageLoad);
        }

        return () => {
          window.removeEventListener('load', handlePageLoad);
        };
      }
    } else {
      // setLoading(false);
      document.body.style.color = "";

    }
    setTimeout(() => {
      // setLoading(false);

    }, 6000);
  }, []);




  const text = 'COMING SOON';
  // New Loader

  // const audioRef = useRef(null);
  const [musicStatus, setMusicStatus] = useState(true);
  const [isDone, setisDone] = useState(true);
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleMusicButton = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    // if (!musicStatus) {
    //   audioRef.current.pause();
    // } else {
    //   audioRef.current.play();
    // }
    setisDone(false);
    setLoading(false);

  };

  // Handle body style changes and removal
  // useEffect(() => {
  //   // Set initial body styles
  //   document.body.style.color = "#db0e15";
  //   document.body.style.fontFamily = "'Share Tech Mono', monospace";
  //   document.body.style.cursor = "default";

  //   document.body.style.fontWeight = "300";
  //   document.body.style.textShadow = "0 0 5px rgba(219, 14, 21, .8)";
  //   document.body.style.background = "url(https://image.ibb.co/h2hLAJ/bg.png) #000";
  //   document.body.style.height = "100vh";

  //   return () => {
  //     // Clean up by resetting the body styles
  //     document.body.style = "";
  //   };
  // }, []);

  // Handle typing effect for login and password
  useEffect(() => {
    const loginText = "01337";
    const passwordText = "********";
    let loginIndex = 0;
    let passwordIndex = 0;

    const typeLogin = () => {
      if (loginIndex < loginText.length) {
        setLoginValue(prev => prev + loginText[loginIndex]);
        loginIndex++;
        setTimeout(typeLogin, 200);
      } else {
        // Start typing the password after a short delay
        setTimeout(typePassword, 500); // Adjust the delay as needed
      }
    };

    const typePassword = () => {
      if (passwordIndex < passwordText.length) {
        setPasswordValue(prev => prev + passwordText[passwordIndex]);
        passwordIndex++;
        setTimeout(typePassword, 150);
      } else {
        setShowSubmitButton(true); // Show the submit button after typing is complete
      }
    };

    // Start typing the login text after 1 second
    const typingTimeout = setTimeout(typeLogin, 1000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(typingTimeout);
  }, []);


  // Handle "Enter" button click to reset body styles
  const handleEnter = () => {
    handleMusicButton();
    // Reset body styles after clicking Enter
    document.body.style = "";
  };
  // New Loader
  const [progressLoader, setProgressLoader] = useState(0);

  useEffect(() => {
    const updateProgressLoader = () => {
      setProgressLoader(prev => {
        if (prev < 100) {
          return prev + 1; // Increment progressLoader
        }
        return 100; // Ensure it doesn't exceed 100
      });
      if (progressLoader < 100) {
        setTimeout(updateProgressLoader, 80);
      }
    };
    updateProgressLoader();
    console.log('progressLoader: ', progressLoader);
  }, [progressLoader]);

  // Optional: use a useEffect to handle actions after loading completes
  useEffect(() => {
    if (progressLoader === 100) {
      // You can perform any actions needed after loading completes here
      console.log('Loading complete!');
    }
    console.log(progressLoader);
  }, [progressLoader]);
  return (
    <>
      {/*  */}
      <audio ref={audioRef} src={music} />
      {loading &&

        <>
          {isDone && (
            <div className="loading-container on">
              <div className="screen">
                <h3 className="title loader-title">CONNECTION ESTABLISHED</h3>
                <div className="box--outer">
                  <div className="box-loader">
                    <div className="box--inner">
                      <div className="content">
                        <div className="holder">

                          <span className="inner-text-loader">
                            <b>R1000 Mainframe Activated</b> -- Scanning for Authorized Access <br /> Protocol Initiated
                          </span>
                          <br />
                          <br />
                          <div className="">
                            <div className="col col__left label">Login</div>
                            <div className="col col__center">
                              <input id="login" type="text" value={loginValue} maxLength={32} readOnly />
                            </div>
                          </div>
                          <form>
                            <div className="">
                              <div className="col col__left label">Password</div>
                              <div className="col col__center">
                                <input
                                  type="password"
                                  value={passwordValue}
                                  name="password"
                                  id="password"
                                  required
                                  maxLength={32}
                                  autoComplete="new-password"
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="">

                              <button onClick={handleEnter} disabled={!showSubmitButton} className={`${showSubmitButton ? "glowing-enter" : ""}`} type="button" id="submit" name="submit">
                                Enter
                              </button>
                            </div>
                            <div className="main-container">
                              <div id="main-loader">
                                <div id="heading" classname="flex-container">
                                  <p classname="loader-text">LOADING</p>
                                  <div classname="rotating-symbol">∴</div>

                                  <p className="percentage-value">%</p>
                                </div>
                                <div id="border-loading-bar">
                                  <div className="filled-bar" style={{ width: `${progressLoader}%` }} ></div>
                                </div>
                                <div id="alert-warning">
                                  <p>
                                  </p><div classname="alert-symbol">!</div>
                                  &nbsp; CAUTION, Do not turn off.
                                  <p>
                                  </p><div id="cascade-lines">
                                  </div>
                                </div>
                              </div></div>


                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      }
      {/* {loading && <Loader />} */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lite" element={<LiteLanding />} />
          <Route path="/slot-machine" element={<Memenator />} />
          <Route path="/dashboard" element={<DApp />} />
          <Route path="/mainframe" element={<Dashboard />} />
          {/* <Route path="/loader" element={<Loader />} /> */}
          <Route path="/slot" element={<Slot />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/type" element={<Type />} />
          <Route path="/burning" element={<Burning />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/uploadMedia" element={<UploadMedia />} />
          <Route path="/r1000v1" element={<R1000VR text={text} />} />
          <Route path="/coming-soon" element={<Comingsoon text={text} />} />
          <Route path="/staking" element={<Staking text={text} />} />
          <Route path="/r1000_sniper" element={<Comingsoon text={text} />} />
          <Route path="/immortalize" element={<Comingsoon text={text} />} />
          <Route path="/gigaboost" element={<Navboost />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/fmooners" element={<Comingsoon text={text} />} />
          <Route path="/ntfs" element={<Comingsoon text={text} />} />
          <Route path="/charity" element={<Comingsoon text={text} />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      )}
      <ToastContainer />
    </>
  );
};

const AppWrapper = () => (
  <MusicProvider>
    <Router>
      <App />
    </Router>
  </MusicProvider>
);

export default AppWrapper;
