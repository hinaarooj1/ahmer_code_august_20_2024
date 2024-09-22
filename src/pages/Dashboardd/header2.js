import logo from "../../assets/logo/r1000logo.png";
import presaleImg from "../../assets/navpics/nav-presale.png";
import memenatorImg from "../../assets/navpics/nav-tokenomics.png";
import faqImg from "../../assets/navpics/nav-faq.png";
import xButtonOnMobile from "../../assets/boxes/xlogo.png"
import stakingMenu from "../../assets/navpics/nav-staking.png";
import Xicon from "../../assets/logo/x-icon.png";

import whitePaperImg from "../../assets/navpics/nav-whitepaper.png";
import mobileLogo from "../../assets/logo/mmtr-logo.jpg";
// import telegramIcon from "../assets/boxes/telegram.png";
import telegramIcon from "../../assets/images/social.png";
// import twitterIcon from "../assets/boxes/twitter.png";
import twitterIcon from "../../assets/images/social1_360.png";
import musicIcon from "../../assets/images/music1_360.png";
import musicStopIcon from "../../assets/images/music2_360.png";
import music from "../../assets/music/music.mp3";
import muteIcon from "../../assets/boxes/telegram.png";
import closeIcon from "../../assets/boxes/xlogo.png"
import navstacking from '../../assets/navpics/nav-staking.png'
import navdap from '../../assets/navpics/nav-dapp.png'
import navboost from '../../assets/navpics/nav-boost.png'
import immortal from '../../assets/navpics/nav-immortalize.png'
import mooner from '../../assets/navpics/nav-mooners.png'
import nft from '../../assets/navpics/nav-nft.png'
import burning from '../../assets/navpics/nav-burning.png'
import charity from '../../assets/navpics/nav-charity.png'
import memenator from '../../assets/navpics/memenator.png'
import PHWallet from "../../components/wallet";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useEffect } from "react";
import "./index.css";
import { styled } from 'styled-components';
import whitePaperPDF from "../../assets/whitepaper-unfinished.pdf";
import { useMusic } from "../../utils/MusicContext.js";

function Header2({ handleScrollToFrequencyQuestion, handleScrollToPresale }) {
  const navigate = useNavigate();
  const audioRef = useMusic();

  const [musicStatus, setMusicStatus] = useState(true);
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        divRef1.current &&
        !divRef1.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleMusicButton = () => {
    if (!musicStatus) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicStatus(!musicStatus);
  }
  const start = () => {
    let audio = new Audio("/futuristic.mp3");

    audio.play()
      .then(() => {
        console.log("Audio is playing");
        setTimeout(() => {
          audio.pause();
          console.log('Audio is paused');
        }, 2000);
      })
      .catch(error => {
        console.error("Error playing audio:", error);
      });
  }



  return (
    <>

      <Header className="fixed-header" >
        <div className="liquid max-liquid"  ></div>
        <div className="d-flex header-wrap">
          {/* <audio ref={audioRef} src={music} /> */}
          <div className="left">
            <div
              previewlistener="true"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                src={logo}
                alt=""
                style={{ width: "65px", borderRadius: "0%", zIndex: "4000", position: 'absolute', top: '0' }}
              />
            </div>
          </div>

          <div className="header-connect-button " style={{ height: "100%", width: 'fit-content' }}>
            {/* <PHWallet /> */}
            <div className="connect-overlay-box" style={{ border: 'none' }} >
              <div className="bottom" >
                <div className="btn-wrapper">
                  <button className="" style={{ display: "flex", alignItems: "center", justifyContent: 'center', padding: '0' }}>
                    <PHWallet />
                    <div class="lava" style={{ border: "5px", borderColor: "white" }}>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hamburger-mobile mas"
            style={{ zIndex: "3000", paddingRight: '20px' }}
            ref={divRef1}
            onClick={async () => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >

            <Hamburger
              onClick={async () => {
                await start();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? (
                <>
                  <img src={Xicon} style={{ width: "45px" }} alt="" />
                  {/* <svg
                    className="custom-svg"
                    stroke="#c62828"
                    fill="#c62828"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    ></path>
                  </svg> */}
                </>
              ) : (
                // <svg
                //   className="custom-svg"
                //   stroke="#c62828"
                //   fill="#c62828"
                //   strokeWidth="0"
                //   viewBox="0 0 512 512"
                //   height="1.3em"
                //   width="1.3em"
                //   xmlns="http://www.w3.org/2000/svg"
                // >
                //   <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                // </svg>
                <svg className='nav-img nav-hamburger  image-glow' viewBox="0 0 464 464" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              )}
            </Hamburger>

          </div>
        </div>
        <SciFiUI>
          <Ul isMobileMenuOpen={isMobileMenuOpen}>
            <li
              style={{
                top: '0',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                // border: '2px solid red',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out',
                borderBottom: 'none'
              }}
              onClick={() => { navigate("/slot"); setIsMobileMenuOpen(!isMobileMenuOpen); }}
            >

              <Link className="red-glow" to={'/dashboardd'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                MAINFRAME
              </Link>
            </li>
            <li
              style={{
                top: '0',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                // border: '2px solid red',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out',
                borderBottom: 'none'
              }}
              onClick={() => { navigate('/coming-soon'); setIsMobileMenuOpen(!isMobileMenuOpen); }}
            >
              <Link className="red-glow" to={'coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                STAKING
              </Link>
            </li>
            <li
              style={{
                top: '50px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out',
                borderBottom: 'none'
              }}
              onClick={() => { navigate('/coming-soon'); setIsMobileMenuOpen(!isMobileMenuOpen); }} >
              <Link className="red-glow" to={'/slot'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                MEMENATOR
              </Link>
            </li>
            <li style={{
              top: '100px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
              borderBottom: 'none'
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                IMMORTALIZE
              </Link>
            </li>
            <li style={{
              top: '150px',
              left: isMobileMenuOpen ? '0px' : '500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
              borderBottom: 'none'
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                GIGABOOST
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                FMOONERS
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                NFTS
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/burning'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                BURNING
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                CHARITY
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} >
                SETTINGS
              </Link>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <a className="red-glow" style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} href={whitePaperPDF} target="_blank" rel="noopener noreferrer">Whitepaper</a>
            </li>
            <li style={{
              top: '200px',
              left: isMobileMenuOpen ? '0px' : '-500%',
              background: 'rgb(85 10 10 / 30%)',
              transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
              boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
              position: isMobileMenuOpen ? 'initial' : 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobileMenuOpen ? '300px' : '200px',
              height: '50px',
              color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
              bordercolor: isMobileMenuOpen ? '#860709' : 'none',
              lineHeight: '50px',
              border: '2px solid red',
              borderBottom: 'none',
              textAlign: 'center',
              fontSize: '1.6em',
              cursor: 'pointer',
              transition: 'all 300ms ease-in-out',
            }} onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <a style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} href="mailto:memenator1000@gmail.com?subject=Feedback%20on%20Memenator&body=Dear%20Memenator%20Team,%0D%0A%0D%0AI%20would%20like%20to%20provide%20the%20following%20feedback%20on%20Memenator:" className="nav-link red-glow">
                Feedback
              </a>
            </li>

            <li
              style={{
                top: '650px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="social-div">
              <a href="https://x.com/MemenatoR1000"> <SocialImg src={telegramIcon} className="my-button" alt="Telegram Icon" /></a>
              <a href="https://twitter.com6/memenator"><SocialImg src={twitterIcon} className="my-button" alt="Twitter Icon" /></a>
              <button id="muteButton">
                {musicStatus ? <img src={musicIcon} className="u-btn" onClick={handleMusicButton}></img> : <img src={musicStopIcon} className="u-btn" onClick={handleMusicButton}></img>}
              </button>
            </li>
          </Ul>
        </SciFiUI>
        {/* <SciFiUI >
          <Ul>
            <li className="mobile-menu"
              style={{
                top: '0px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} onClick={() => { navigate("/slot"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/dashboardd'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                MAINFRAME
              </Link>
            </li>
            <li
              style={{
                top: '50px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate('/coming-soon'); setIsMobileMenuOpen(!isMobileMenuOpen); }} >
              <Link className="red-glow" to={'coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                STAKING
              </Link>
            </li>
            <li
              style={{
                top: '100px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/slot'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                MEMENATOR
              </Link>
            </li>
            <li
              style={{
                top: '150px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                IMMORTALIZE
              </Link>
            </li>
            <li
              style={{
                top: '200px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                GIGABOOST
              </Link>
            </li>
            <li
              style={{
                top: '250px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                FMOONERS
              </Link>
            </li>
            <li
              style={{
                top: '300px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                NFTS
              </Link>
            </li>
            <li
              style={{
                top: '350px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/burning"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/burning'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                BURNING
              </Link>
            </li>
            <li
              style={{
                top: '400px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Termin-font', fontSize: '15px' }} >
                CHARITY
              </Link>
            </li>

            <li
              style={{
                top: '500px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>

              <Link className="red-glow" to={'/coming-soon'} style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} >
                SETTINGS
              </Link>
            </li>
            <li
              style={{
                top: '550px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/coming-soon"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <a className="red-glow" style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} href={whitePaperPDF} target="_blank" rel="noopener noreferrer">Whitepaper</a>

            </li>
            <li
              style={{
                top: '600px',
                left: isMobileMenuOpen ? '0px' : '-500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                borderBottom: 'none',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="mobile-menu" onClick={() => { navigate("/"); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <a style={{ fontFamily: 'Technology-Bold', fontSize: '15px' }} href="mailto:memenator1000@gmail.com?subject=Feedback%20on%20Memenator&body=Dear%20Memenator%20Team,%0D%0A%0D%0AI%20would%20like%20to%20provide%20the%20following%20feedback%20on%20Memenator:" className="nav-link red-glow">
                Feedback
              </a>
            </li>
            <li
              style={{
                top: '650px',
                left: isMobileMenuOpen ? '0px' : '500%',
                background: 'rgb(85 10 10 / 30%)',
                // background: 'rgba(255, 0, 0, 0.3)',
                transform: isMobileMenuOpen ? 'skew(0)' : 'skew(45deg) scaleY(-3)',
                boxShadow: isMobileMenuOpen ? '0 0 25px #860709, 0 1px 5px rgba(60, 60, 60, 1)' : '0 3px 0 5px rgba(33, 33, 33, 1) inset',
                position: isMobileMenuOpen ? 'initial' : 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobileMenuOpen ? '300px' : '200px',
                height: '50px',
                color: isMobileMenuOpen ? 'rgba(255, 255, 255, 1)' : 'white',
                bordercolor: isMobileMenuOpen ? '#860709' : 'none',
                lineHeight: '50px',
                border: '2px solid red',
                textAlign: 'center',
                fontSize: '1.6em',
                cursor: 'pointer',
                transition: 'all 300ms ease-in-out'
              }} className="social-div">
              <a href="https://x.com/MemenatoR1000"> <SocialImg src={telegramIcon} className="my-button" alt="Telegram Icon" /></a>
              <a href="https://twitter.com6/memenator"><SocialImg src={twitterIcon} className="my-button" alt="Twitter Icon" /></a>
              <button id="muteButton">
                {musicStatus ? <img src={musicIcon} className="u-btn" onClick={handleMusicButton}></img> : <img src={musicStopIcon} className="u-btn" onClick={handleMusicButton}></img>}
              </button>
            </li>
          </Ul>
        </SciFiUI> */}
      </Header>
      <Overlay
        isMobileMenuOpen={isMobileMenuOpen}
        onClick={() => {
          setIsMobileMenuOpen(false);
          start();
          console.log('hjhjhjhjhjhjhjhj');
        }}
      />
    </>
  );

}
const Header = styled.div`
  @media(max-width:768px){
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  z-index: 1000;
  }
  `;

const Overlay = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 499;
  opacity: ${props => (props.isMobileMenuOpen ? 1 : 0)};
  visibility: ${props => (props.isMobileMenuOpen ? 'visible' : 'hidden')};
  transform: ${props => (props.isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)')};
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
`;

const Img = styled.img`
 hieght:21px;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
     top: 18px; 
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    left:0%;
    flex-direction: column;
`;

const SciFiUI = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative; 
`;

const SocialImg = styled.img`
  margin: 0 10px;
  width: 50px;
  height: 40px;
`;

const Maindiv = styled.div`
  // background-color: #333;
  color: white;
  padding: 10px 20px;

  // overflow:hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

const NavMenu = styled.nav`
  // display: ${(props) => (props.isMobileMenuOpen ? 'block' : 'none')};
  // display:'block';
  position: absolute;
  top: 100px;
  left: 36%;
  width: 100%;
  // background-color: #444;
  // padding: 20px 0;
  z-index: 1;

  @media (max-width: 768px) {
    position: absolute;
  top: 100px;
  left: 13%;
  width: 100%;
  // background-color: #444;
  // padding: 20px 0;
  z-index: 1;
  }
`;

const Li = styled.li`
  transform: skew(45deg) scaleY(-3);
  box-shadow: 0 3px 0 5px rgba(33, 33, 33, 1) inset;
  position: absolute;
  display: flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 50px;
  color: white !important;
  line-height: 50px;
  border: 1px solid #860709;
  // background: #860709;
  text-align: center;
  font-size: 1.6em;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.08);
    font-size: 1.8em;
    z-index: 99;
  }

  &:nth-child(1) {
    top: 0;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};
    background: rgba(255, 0, 0, 0.3);
  }

  &:nth-child(2) {
    top: 50px;
    // left: 500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '500%')};;
    background: rgba(290, 20, 60, 0.3);
  }

  &:nth-child(3) {
    top: 100px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
    background: rgba(255, 34, 34, 0.3)
  }

  &:nth-child(4) {
    top: 150px;
    // left: 500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '500%')};;
    background: rgba(220, 42, 42, 0.3)
  }

  &:nth-child(5) {
    top: 200px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
    background: rgba(178, 42, 42, 0.3)
  }

  &:nth-child(6) {
    top: 250px;
    // left: 500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '500%')};;
    background: rgba(165, 42, 42, 0.3)
  }

  &:nth-child(7) {
    top: 300px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(8) {
    top: 350px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(9) {
    top: 400px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(10) {
    top: 450px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(11) {
    top: 500px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(12) {
    top: 550px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(13) {
    top: 600px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(14) {
    top: 650px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  &:nth-child(15) {
    top: 700px;
    // left: -500%;
    left: ${(props) => (props.isMobileMenuOpen ? '0px' : '-500%')};;
  }

  // .scifiUI:hover & {
  //   left: 0;
  // }
`;

const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomSvg = styled.svg`
  stroke: #c62828;
  fill: #c62828;
  stroke-width: 0;
  height: 1.3em;
  width: 1.3em;
`;

export default Header2;