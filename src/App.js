import "./assets/index.css";
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/landing";
import LiteLanding from "./pages/liteLanding";
import Memenator from "./pages/memenator";
import DApp from "./pages/dashboard";
import Comingsoon from "./pages/comingsoon";
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


const App = () => {
  const [loading, setLoading] = useState(false); // Initially not loading
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {

    const pathsWithLoader = ["/", "/mainframe"];

    if (pathsWithLoader.includes(location.pathname)) {
      setLoading(true);
      if (window.innerWidth < 768) {
        setTimeout(() => {
          setLoading(false);
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
            setLoading(false);
          };

          // Check if the video is already loaded
          if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
            setLoading(false);
          } else {
            video.addEventListener('loadeddata', handleVideoLoad);
          }

          return () => {
            video.removeEventListener('loadeddata', handleVideoLoad);
          };
        } else {
          setLoading(false);
        }
      } else if (location.pathname === "/mainframe") {
        const handlePageLoad = () => {
          setLoading(false);
        };

        // Check if the page is already loaded
        if (document.readyState === "complete") {
          setLoading(false);
        } else {
          window.addEventListener('load', handlePageLoad);
        }

        return () => {
          window.removeEventListener('load', handlePageLoad);
        };
      }
    } else {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);

    }, 6000);
  }, [location]);




  const text = 'COMING SOON';
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/lite" element={<LiteLanding />} />
          <Route path="/slot-machine" element={<Memenator />} />
          <Route path="/dashboard" element={<DApp />} />
          <Route path="/mainframe" element={<Dashboard />} />
          <Route path="/loader" element={<Loader />} />
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
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
