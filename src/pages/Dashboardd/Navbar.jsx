import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo/r1000logo.png';
import navstacking from '../../assets/images/staking-icon.svg'
import circleFilled from '../../assets/images/mainframe-icon.svg'
import navdap from '../../assets/navpics/nav-dapp.png'
import navsniper from '../../assets/images/sniper-icon.svg'
import navboost from '../../assets/images/boost-icon.svg'
import mainframe from '../../assets/navpics/mainframe.png'
import immortal from '../../assets/images/diamond-icon.svg'
import mooner from '../../assets/images/rocket-icon.svg'
import nft from '../../assets/images/nfts-icon.svg'
import burning from '../../assets/images/burn-icon.svg'
import charity from '../../assets/images/charity-icon.svg'
import memenator from '../../assets/images/slot_machine-icon.svg'
import telegram from '../../assets/images/social.png'
import X from '../../assets/images/social1_360.png'
import musicIcon from "../../assets/images/music1_360.png";
import musicStopIcon from "../../assets/images/music2_360.png";
import music from "../../assets/music/music.mp3";
import whitepaper_pdf from '../../assets/whitepaper.pdf';
import connect from '../../assets/boxes/connect.png';
import PHwallet from '../../components/wallet';
import CustomCursor from '../../components/CustomCursor.js';
//  --- ---- ---  Social icons  --- ---- --- 
import { FaTwitter } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { useMusic } from "../../utils/MusicContext.js";

const Navbar = () => {

  const [musicStatus, setMusicStatus] = useState(true);
  const audioRef = useMusic();

  const handleMusicButton = () => {
    if (!musicStatus) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicStatus(!musicStatus);
  }
  const contentRef = useRef(null);

  const scrollUp = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop -= 20; // Adjust scroll amount as needed
    }
  };

  const scrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop += 20; // Adjust scroll amount as needed
    }
  };
  return (


    //  --- ---- --- Star of the Nav bar  --- ---- --- //



    <>

      <CustomCursor />

      <div className='top-box w-100'>
        <Link to={'/'} className="logo-container">
          <img src={logo} alt="Logo" className="logo" style={{ marginRight: '50px', width: '100px' }} />
        </Link>
        <div class=" marquee-container m-0">
          <marquee direction="left" scrollamount="3" behavior="loop" class="marquee">
            <span style={{ fontSize: '28px', fontFamily: 'Technology-Bold' }}>R1000 Protocol Initiated</span>
          </marquee>
        </div>

        <div >
          {/* <img src={connect} alt="nav-conect-wallet" style={{ width: '100%', objectFit:'contain' }} /> */}
          <div className="connect-overlay-box header-connect-button" style={{ border: 'none' }} >
            <div className="bottom" >
              <div className="btn-wrapper">
                <button className="" style={{ display: "flex", alignItems: "center", justifyContent: 'center', padding: '0' }}>
                  <PHwallet />
                  <div class="lava" style={{ border: "5px", borderColor: "white" }}>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-sidebar'>
        <nav ref={contentRef} className="navbar  navbar-side" style={{ overflowY: "scroll", height: "-webkit-fill-available" }}>

          {/* <button class="scroll-button up" onClick={scrollUp}>&#9650;</button> */}
          {/* <audio ref={audioRef} src={music} /> */}
          <ul className="nav-links d-flex flex-column align-items-center ">

            <li className="nav-item">
              <Link to="/mainframe" className="nav-link red-glow">
                {/* <img src={circleFilled} alt="mainframe" className='nav-img  image-glow' /> */}
                <svg className='nav-img  image-glow' viewBox="0 0 464 464" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_di_6_56)">
                    <path d="M197 258.448C197 277.814 212.67 293.513 232 293.513C251.33 293.513 267 277.814 267 258.448C267 239.081 251.33 223.382 232 223.382C212.67 223.382 197 239.081 197 258.448Z" fill="#ff4545" />
                  </g>
                  <g filter="url(#filter1_di_6_56)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M232 195.872C266.495 195.872 294.459 223.888 294.459 258.448C294.459 293.007 266.495 321.024 232 321.024C197.505 321.024 169.541 293.007 169.541 258.448C169.541 223.888 197.505 195.872 232 195.872ZM303 258.448C303 219.162 271.212 187.314 232 187.314C192.788 187.314 161 219.162 161 258.448C161 297.734 192.788 329.581 232 329.581C271.212 329.581 303 297.734 303 258.448Z" fill="#ff4545" />
                  </g>
                  <g filter="url(#filter2_di_6_56)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M219.031 52.1358C216.138 48.7241 214.378 44.2103 214.378 39.2603C214.378 28.6231 222.507 20 232.534 20C242.561 20 250.69 28.6231 250.69 39.2603C250.69 44.5704 248.664 49.3786 245.388 52.8627L257.855 74.4962C347.954 87.0985 417.3 164.612 417.3 258.352C417.3 282.935 412.531 306.402 403.869 327.875L416.928 350.537C419.449 349.231 422.296 348.496 425.31 348.496C435.632 348.496 444 357.119 444 367.756C444 378.393 435.632 387.016 425.31 387.016C417.075 387.016 410.085 381.529 407.594 373.909H377.036C343.086 416.622 290.734 444 232 444C173.266 444 120.914 416.622 86.9645 373.909H56.4064C53.9154 381.529 46.9247 387.016 38.6902 387.016C28.3679 387.016 20 378.393 20 367.756C20 357.119 28.3679 348.496 38.6902 348.496C41.7041 348.496 44.5514 349.231 47.0724 350.537L60.1314 327.875C51.4694 306.402 46.7003 282.935 46.7003 258.352C46.7003 164.612 116.046 87.0985 206.145 74.4962L219.031 52.1358ZM238.226 57.5551L247.316 73.3286C242.265 72.9146 237.157 72.7035 232 72.7035C226.843 72.7035 221.735 72.9146 216.684 73.3286L225.966 57.2217C228.003 58.0605 230.218 58.5207 232.534 58.5207C234.522 58.5207 236.436 58.1816 238.226 57.5551ZM232 81.2636C225.041 81.2636 218.176 81.6665 211.427 82.4503L189.264 120.911C202.764 116.702 217.118 114.434 232 114.434C246.882 114.434 261.236 116.702 274.736 120.911L252.573 82.4503C245.824 81.6665 238.959 81.2636 232 81.2636ZM281.291 132.286C266.02 126.288 249.394 122.994 232 122.994C214.606 122.994 197.98 126.288 182.709 132.285L98.3971 278.593C103.66 313.76 122.427 344.501 149.24 365.349H314.76C341.573 344.501 360.34 313.76 365.603 278.593L281.291 132.286ZM366.992 263.884L294.691 138.418C314.355 148.756 331.164 163.807 343.623 182.073C342.266 184.138 341.471 186.64 341.471 189.336C341.471 196.427 346.97 202.176 353.753 202.176C354.15 202.176 354.542 202.156 354.928 202.118C362.746 219.244 367.103 238.288 367.103 258.352C367.103 260.205 367.066 262.049 366.992 263.884ZM374.47 276.86C375.247 270.801 375.647 264.623 375.647 258.352C375.647 236.907 370.966 216.558 362.571 198.274C364.715 195.962 366.035 192.81 366.035 189.336C366.035 182.244 360.536 176.495 353.753 176.495C352.62 176.495 351.523 176.656 350.482 176.956C334.891 154.219 312.948 136.194 287.219 125.451L263.355 84.0415C346.018 98.8677 408.756 171.269 408.756 258.352C408.756 279.401 405.09 299.593 398.363 318.322L374.47 276.86ZM372.167 289.983C365.54 319.588 349.808 345.745 328.07 365.349H372.857C381.424 354.045 388.666 341.68 394.353 328.483L372.167 289.983ZM302.39 373.909H161.61C178.948 384.533 198.863 391.35 220.196 393.2C221.588 387.922 225.868 384.079 230.932 384.079C236.048 384.079 240.365 388.002 241.711 393.365C263.835 391.791 284.486 384.879 302.39 373.909ZM146.362 373.909C167.407 389.589 192.882 399.635 220.564 401.82C222.246 406.48 226.254 409.759 230.932 409.759C235.557 409.759 239.528 406.553 241.243 401.976C269.772 400.161 296.038 390.002 317.638 373.909H365.941C333.527 411.587 285.544 435.44 232 435.44C178.456 435.44 130.473 411.587 98.0586 373.909H146.362ZM135.93 365.349C114.192 345.745 98.4604 319.588 91.8333 289.983L69.6469 328.483C75.3336 341.68 82.5763 354.045 91.1433 365.349H135.93ZM97.0075 263.884L169.309 138.418C149.347 148.913 132.327 164.265 119.813 182.906C120.861 184.797 121.461 186.993 121.461 189.336C121.461 196.427 115.962 202.176 109.179 202.176C109.152 202.176 109.126 202.176 109.1 202.175C109.082 202.175 109.063 202.175 109.046 202.175C101.244 219.287 96.8967 238.311 96.8967 258.352C96.8967 260.205 96.9339 262.049 97.0075 263.884ZM176.781 125.451C150.943 136.24 128.924 154.371 113.321 177.244C112.027 176.759 110.632 176.495 109.179 176.495C102.396 176.495 96.8967 182.244 96.8967 189.336C96.8967 193.191 98.5225 196.65 101.096 199.004C92.9106 217.099 88.3526 237.192 88.3526 258.352C88.3526 264.623 88.753 270.801 89.5295 276.86L65.6368 318.322C58.9101 299.593 55.2443 279.401 55.2443 258.352C55.2443 171.269 117.982 98.8677 200.645 84.0415L176.781 125.451ZM53.661 356.224L64.3876 337.61C68.9847 347.351 74.4029 356.627 80.5527 365.349H57.2358C56.8249 361.953 55.5565 358.833 53.661 356.224ZM406.764 365.349H383.447C389.597 356.627 395.015 347.351 399.612 337.61L410.339 356.224C408.443 358.833 407.175 361.953 406.764 365.349Z" fill="#ff4545" />
                  </g>
                  <defs>
                    <filter id="filter0_di_6_56" x="180.9" y="207.282" width="102.2" height="102.332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="8.05" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_56" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_56" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="8.5" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_56" />
                    </filter>
                    <filter id="filter1_di_6_56" x="144.9" y="171.214" width="174.2" height="174.467" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="8.05" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_56" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_56" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.75" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_56" />
                    </filter>
                    <filter id="filter2_di_6_56" x={0} y={0} width={464} height={464} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation={10} />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_56" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_56" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation={3} />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_56" />
                    </filter>
                  </defs>
                </svg>




                MAINFRAME
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/staking" className="nav-link red-glow">
                <img src={navstacking} alt="nav-staking" className='nav-img image-glow' />
                STAKING
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/slot" style={{ marginRight: '23px' }} className="nav-link red-glow">
                <img src={memenator} alt="nav-memenator" className='nav-img' />
                MEMENATOR
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/r1000_sniper" className="nav-link red-glow">
                <img src={navsniper} alt="nav-sniper" className='nav-img' />
                SNIPER
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/immortalize" className="nav-link red-glow">
                <img src={immortal} alt="nav-immortalize" className='nav-img' />
                IMMORTALIZE
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/gigaboost" className="nav-link red-glow">
                <img src={navboost} alt="nav-boost" className='nav-img' />
                GIGABOOST
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/fmooners" className="nav-link red-glow">
                <img src={mooner} alt="nav-mooners" className='nav-img' />
                FMOONERS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/ntfs" className="nav-link red-glow">
                <img src={nft} alt="nav-nft" className='nav-img' />
                NFTS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/burning" className="nav-link red-glow">
                <img src={burning} alt="nav-burning" className='nav-img' />
                BURNING
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/charity" className="nav-link red-glow">
                <img src={charity} alt="nav-charity" className='nav-img' />
                CHARITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className="nav-link red-glow">
                <img src={charity} alt="media" className='nav-img' />
                Media
              </Link>
            </li>


            <li className="" style={{ borderTop: '1px solid #ff3a3a', width: '100%' }}>
              {/* <Link to="" style={{ marginLeft: '16px', borderTop:'1px solid white' }} className="nav-link "></Link> */}
            </li>
            <li className="nav-item"  >
              <Link to="/coming-soon" style={{ fontFamily: 'Technology-Bold' }} className="nav-link space2px icon-flexs rpc"> <span className='green-circle'></span> RPC (Triton)</Link>
            </li>

            <li className="nav-item" >
              <Link to="/coming-soon" style={{ fontFamily: 'Technology-Bold' }} className="nav-link space2px icon-flexs">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z" /></svg>

                Settings</Link>
            </li>

            <li className="nav-item">
              <a href={whitepaper_pdf} style={{ fontFamily: 'Technology-Bold' }} className="nav-link space2px icon-flexs" target="_blank">

                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title /><path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z" /></svg>

                Whitepaper</a>
            </li>


            <li className="nav-item ">
              <a style={{ fontFamily: 'Technology-Bold' }} href="mailto:memenator1000@gmail.com?subject=Feedback%20on%20Memenator&body=Dear%20Memenator%20Team,%0D%0A%0D%0AI%20would%20like%20to%20provide%20the%20following%20feedback%20on%20Memenator:" className="nav-link space2px  icon-flexs"
              >

                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM11 13H13V15H11V13ZM11 7H13V12H11V7Z" /></svg>

                Feedback
              </a>
            </li>


            <li className="nav-item mb-0" >
              <Link style={{ fontFamily: 'Technology-Bold' }} to="/r1000v1" className="nav-link space2px icon-flexs" >

                <svg fill="#fff" height="1em" width="1em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 444.462 444.462" xmlSpace="preserve">
                  <g>
                    <path d="M317.166,119.796H127.297c-4.143,0-7.5,3.358-7.5,7.5v189.869c0,4.142,3.357,7.5,7.5,7.5h189.869
		c4.143,0,7.5-3.358,7.5-7.5V127.296C324.666,123.154,321.309,119.796,317.166,119.796z M309.666,309.666H134.797V134.796h174.869
		V309.666z" />
                    <path d="M185.887,266.076h72.689c4.143,0,7.5-3.358,7.5-7.5v-72.689c0-4.142-3.357-7.5-7.5-7.5h-72.689c-4.143,0-7.5,3.358-7.5,7.5
		v72.689C178.387,262.718,181.744,266.076,185.887,266.076z M193.387,193.386h57.689v57.689h-57.689V193.386z" />
                    <path d="M305.524,15c6.96,0,10.082-9.068,4.637-13.389c-5.408-4.292-13.535,0.832-11.948,7.579
		C299.004,12.547,302.068,15,305.524,15z" />
                    <path d="M143.104,430.73c-2.454-1.616-5.649-1.661-8.146-0.113c-2.891,1.792-4.211,5.471-3.135,8.698
		c0.978,2.93,3.715,5.015,6.809,5.138c3.191,0.127,6.143-1.826,7.299-4.794C147.185,436.437,146,432.636,143.104,430.73z" />
                    <path d="M436.962,188.086c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5
		s-3.357-7.5-7.5-7.5h-82.296v-5.392c0-19.99-16.264-36.253-36.254-36.253h-5.392V31.6c0-4.142-3.357-7.5-7.5-7.5
		s-7.5,3.358-7.5,7.5v58.196h-26.645V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.645V7.5
		c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.646V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-26.645
		V7.5c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v82.296h-5.392c-19.99,0-36.253,16.263-36.253,36.253v5.392H7.5
		c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5
		c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v26.645H7.5
		c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h82.297v5.392c0,19.99,16.263,36.253,36.253,36.253h5.392v58.197
		c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-58.197h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h26.646
		v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296
		h26.645v82.296c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-82.296h5.392c19.99,0,36.254-16.263,36.254-36.253v-5.392h82.296
		c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296
		v-26.645h82.296c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-82.296v-26.645H436.962z M339.666,318.412
		c0,11.719-9.534,21.253-21.254,21.253H126.05c-11.719,0-21.253-9.534-21.253-21.253V126.05c0-11.719,9.534-21.253,21.253-21.253
		h192.362c11.72,0,21.254,9.534,21.254,21.253V318.412z" />
                  </g>
                </svg>

                R1000 V1</Link>
            </li>

          </ul>
          <div className="social-icons" >
            <a href="https://t.me/memenator" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="TelegramIcon" /></a>
            <a href="https://x.com/MemenatoR1000" target="_blank" rel="noopener noreferrer"><img src={X} alt="TelegramIcon" /></a>
            <button id="muteButton">
              {musicStatus ? <img src={musicIcon} style={{ width: "50px", height: "40px" }} onClick={handleMusicButton}></img> : <img src={musicStopIcon} style={{ width: "50px", height: "40px" }} onClick={handleMusicButton}></img>}
            </button>
          </div>

          {/* <button class="scroll-button down" onClick={scrollDown}>&#9660;</button> */}
        </nav></div>
    </>
  );
}

export default Navbar;
