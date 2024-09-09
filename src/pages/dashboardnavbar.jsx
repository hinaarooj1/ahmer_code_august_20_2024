import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/dashboardnavbar.css'; // Import Navbar-specific CSS

//  --- ---- ---  Social icons  --- ---- --- 
import {FaTwitter} from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Navbar = () => {
  return (

    
    //  --- ---- --- Star of the Nav bar  --- ---- --- //

    <nav className="navbar">
      <div className="logo-container">

        {/* Logo image on the top of the nav */}
        <img src="../assets/logo/r1000logo.png" alt="Logo" className="logo"  style={{ marginRight: '50px' }}/>

                  {/* --- ---- --- Nav Bar Heading Text version - Use this if you want to stop using images for the nav items --- ---- --- }

                  <h1 className="site-title">Memenator Dashboard</h1> */}
                          {/*<h1 className="site-title"><img src="../assets/images/boxes/buynow.png" alt="nav-buynow" /></h1> 
                </div>
                <ul className="nav-links" style={{ marginLeft: '50px' }}>

                  {/* Text Nav Items 
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Dashboard</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Staking</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">AI Tools</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Memenator</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Rewards</Link>
                  </li> */}


{/*  --- ---- --- Image Nav Bar  items  --- ---- --- */}

</div>
<ul className="nav-links" style={{ marginLeft: '50px' }}>


  <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/dappnav/nav-staking.png" alt="nav-staking" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/dappnav/nav-memenator.png" alt="nav-memenator" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/dappnav/nav-r1000sniper.png" alt="nav-sniper" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/dappnav/nav-immortalize.png" alt="nav-immortalize" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/boxes/nav-boost.png" alt="nav-boost" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/dappnav/nav-mooners.png" alt="nav-mooners" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>





       {/*} <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/images/boxes/nav-presale.png" alt="nav-presale" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li> 
        
                <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/images/boxes/nav-dapp.png" alt="nav-dapp" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>*/}


        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/images/dappnav/nav-nft.png" alt="nav-nft" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/images/dappnav/nav-burning.png" alt="nav-burning" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link"><img src="../assets/images/dappnav/nav-charity.png" alt="nav-charity" style={{ maxWidth: 150, maxHeight: 75 }}/></Link>
        </li>

      
        <li className="nav-item" style={{ marginLeft: '5px' }}>
        <Link to="/" className="nav-link green-circle">RPC (Triton)</Link>
        </li>

        <li className="nav-item" style={{ marginLeft: '30px' }}>
          <Link to="/" className="nav-link" style={{ marginLeft: '1px' }}>  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z" /></svg>
Settings</Link>
        </li>

        <li className="nav-item">
          <Link to="/whitepaper.pdf" className="nav-link" style={{ marginLeft: '20px' }} target="_blank">Whitepaper</Link>
        </li>


        <li className="nav-item">
  <a href="mailto:memenator1000@gmail.com?subject=Feedback%20on%20Memenator&body=Dear%20Memenator%20Team,%0D%0A%0D%0AI%20would%20like%20to%20provide%20the%20following%20feedback%20on%20Memenator:" className="nav-link" style={{ marginLeft: '20px' }}>
    Feedback
  </a>
</li>


        <li className="nav-item">
          <Link to="/" className="nav-link" style={{ marginLeft: '25px' }}>R1000 V1</Link>
        </li>

      </ul>

{/*  --- ---- --- Socail Icon Images - Nav Bar  items  --- ---- --- */}

      <div className="social-icons" style={{ marginRight: '80px' }}>

        {/* --- --- --- React-icons --- ---- --- *

        <a href="#" target="_blank" rel="noopener noreferrer"> <FaTelegramPlane /> </a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><LuInstagram /></a>
        */}


          {/* --- --- --- Social Icons Using Direct Images --- ---- --- */}

        <a href="https://t.me/memenator" target="_blank" rel="noopener noreferrer"><img src="../assets/images/boxes/telegram.png" alt="TelegramIcon" /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><img src="../assets/images/boxes/xlogo.png" alt="TelegramIcon" /></a>
        <a href="https://x.com/MemenatoR1000" target="_blank" rel="noopener noreferrer"><img src="../assets/images/boxes/twitter.png" alt="TelegramIcon" /></a>
      </div>

    </nav>
  );
}

export default Navbar;
