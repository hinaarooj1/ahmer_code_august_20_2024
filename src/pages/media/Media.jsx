import React, { useState, useEffect } from 'react';
import Navbar from '../Dashboardd/Navbar.jsx';
import Header2 from '../Dashboardd/header2.js';
import CustomCursor from "../../components/CustomCursor";
import video from '../../assets/images/dapp.mp4';
import downloadIcon from '../../assets/new_image/download.png';
import './media.css';
import { BASE_URL } from '../../utils/constant.js';

function Navboost() {
    const [activeTab, setActiveTab] = useState('videos'); // Default tab is 'videos' 
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
    const [mediaFiles, setMediaFiles] = useState({
        videos: [],
        images: [],
        pngImages: [],
        alphaVideos: []
    });

    useEffect(() => {
        // Fetch media data from API
        const fetchMediaData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/admin/getMedia`);
                const data = await response.json();
                console.log('Fetched media data:', data); // Log the data
                setMediaFiles({
                    videos: data.media.filter(file => file.type === 'videos'),
                    images: data.media.filter(file => file.type === 'images'),
                    pngImages: data.media.filter(file => file.type === 'pngImages'),
                    alphaVideos: data.media.filter(file => file.type === 'alphaVideos') // Adjust if necessary
                });// Assuming the API returns the same structure
            } catch (error) {
                console.error('Error fetching media data:', error);
            }
        };

        fetchMediaData();
    }, []);

    // Function to render media files based on the active tab
    const renderMedia = (mediaList) => {
        if (!Array.isArray(mediaList) || mediaList.length === 0) {
            return <div>No media available</div>; // Handle empty state
        }

        return mediaList.map((media, index) => (

            <div className="media-item" key={media._id}>
                {media.type === 'images' || media.type === 'image/png' ? (
                    <div className="media-bx"><img src={media.thumbnailUrl} alt={media.name} className="media-thumbnail" />
                    </div>
                ) : media.type === 'videos' ? (
                    <a href={media.url} target='_blank'>
                        <div className="media-bx">
                            <video className="media-thumbnail" >
                                <source src={media.thumbnailUrl} type="video/mp4" />
                            </video>
                        </div>
                    </a>
                ) : media.type === 'pngImages' ? (

                    <div className="media-bx"><img src={media.thumbnailUrl} alt={media.name} className="media-thumbnail" />
                    </div>
                ) : media.type === 'alphaVideos' ? (
                    <a href={media.url} target='_blank'>
                        <div className="media-bx">  <video className="media-thumbnail" >
                            <source src={media.thumbnailUrl} type="video/mp4" />
                        </video></div>
                    </a>
                ) : (
                    <></>
                )}
                <div className="media-download">
                    <a href={media.url} download={media.url}>
                        <img style={{ width: "30px" }} src={downloadIcon} alt="" />
                    </a>
                </div>
            </div>
        ));
    };



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
            <div className="media-main">
                <div className='sidebar-navbar-rest-area'>
                    <div className="media-page">
                        <h1>Media Page</h1>

                        {/* Tabs */}
                        <div className="tabs">
                            <button className={activeTab === 'videos' ? 'active' : ''} onClick={() => setActiveTab('videos')}>
                                Videos
                            </button>
                            <button className={activeTab === 'images' ? 'active' : ''} onClick={() => setActiveTab('images')}>
                                Images
                            </button>
                            <button className={activeTab === 'pngImages' ? 'active' : ''} onClick={() => setActiveTab('pngImages')}>
                                Images (png)
                            </button>
                            <button className={activeTab === 'alphaVideos' ? 'active' : ''} onClick={() => setActiveTab('alphaVideos')}>
                                Videos (Alpha)
                            </button>
                        </div>

                        {/* Media Display */}
                        <div className="media-gallery">
                            {activeTab === 'videos' && renderMedia(mediaFiles.videos)}
                            {activeTab === 'images' && renderMedia(mediaFiles.images)}
                            {activeTab === 'pngImages' && renderMedia(mediaFiles.pngImages)}
                            {activeTab === 'alphaVideos' && renderMedia(mediaFiles.alphaVideos)}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Navboost;
