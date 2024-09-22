// // src/components/Loader.js
// import React, { useEffect } from 'react';
// import './loader.css'; // Ensure to create this CSS file for styling
// import { Link } from 'react-router-dom';

// const Loader = () => {
//     // useEffect(() => {
//     //     let progress = 0;
//     //     const progressBar = document.querySelector('.progress');
//     //     const percentageText = document.querySelector('.percentage');

//     //     function updateProgress() {
//     //         if (progress < 100) {
//     //             progress += 1;
//     //             progressBar.style.width = progress + '%';
//     //             percentageText.textContent = progress + '%';
//     //             setTimeout(updateProgress, 50);
//     //         }
//     //     }

//     //     updateProgress();
//     // }, []);

//     return (
//         <>
//             <div className="loader-container">
//                 <div className="loader">
//                     <div className="liquid"></div>
//                     <div className="liquid"></div>
//                     <div className="liquid"></div>
//                     <div className="liquid"></div>
//                     <div className="progress-bar">
//                         <div className="progress"></div>
//                         <div className="percentage">0%</div>
//                     </div>
//                 </div>
//                 <svg>
//                     <filter id="gooey">
//                         <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
//                         <feColorMatrix values="
//                         1 0 0 0 0
//                         0 1 0 0 0
//                         0 0 1 0 0
//                         0 0 0 20 -10
//                         " />
//                     </filter>
//                 </svg>
//             </div >
//             <a className="connect-overlay-box lighta neon-glow" href="/lite">
//                 <div className="bottom" bis_skin_checked={1}>
//                     <div className="btn-wrapper" bis_skin_checked={1} style={{ textAlign: 'center', display: 'flex', alignItems: 'center', height: '50px', width: '250px' }}>
//                         <button className="wallet-adapter-button wallet-adapter-button-trigger" tabIndex={0} type="button" style={{
//                             pointerEvents: 'auto', fontFamily: 'Minecraft',
//                             fontSize: '20px', justifyContent: 'center', width: '100%'
//                         }}>Switch to Light</button></div></div>
//                 <div className="lava" bis_skin_checked={1} style={{ border: '5px white' }} /></a>

//         </>
//     );
// };

// export default Loader;
