import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Dashboardd/Navbar.jsx';
import Header2 from '../Dashboardd/header2.js';
import CustomCursor from "../../components/CustomCursor";
import video from '../../assets/images/dapp.mp4';
import '../Dashboardd/dashboard.css';
import Typed from 'typed.js';
import './Staking.css'
export const Staking = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);
    const analysisRef = useRef(null);
    const trackingRef = useRef(null);
    const reportRef = useRef(null);
    const viewRef = useRef(null);



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
            <div className='Staking-main-box'>
                <div className='container staking-container '>
                    <div className="staking-con" bis_skin_checked={1}><div className="child-wrap-staking" bis_skin_checked={1}><h2 className="staking-head">Staking</h2><p className="para">
                        Lock in your tokens with the power of the R1000 Prototype, where advanced algorithms forge unstoppable growth. Secure your future in a vault of cybernetic dominance and watch your assets rise with every pulse of the blockchain.

                    </p><h3 className="wallet-address">Wallet : <span>0x2729…4a67</span></h3><div className="main-row-cont" bis_skin_checked={1}><div className="one active" bis_skin_checked={1}><span>Current APY</span>47.23%</div><div className="one" bis_skin_checked={1}><span>$Memenator Staked</span>41,231,364</div><div className="one" bis_skin_checked={1}><span>% of $Memenator Staked</span>63.71%</div><div className="one" bis_skin_checked={1}><span>Rewards Paid ($Memenator)</span>3,452,453</div><div className="one" bis_skin_checked={1}><span>Rewards Paid (SOL)</span>76.72111</div></div><div className="line-con" bis_skin_checked={1}><div className="line" bis_skin_checked={1} /></div><h2 className="choose-pool">Choose Pools</h2><div className="main-pool-card" bis_skin_checked={1}><div className="card-staking active" bis_skin_checked={1}><div className="duration-head active" bis_skin_checked={1}>7-Day Pool</div><div className="up active" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>47.41%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>7,082,264</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>531,647</div></div></div><div className="down active" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div><div className="card-staking" bis_skin_checked={1}><div className="duration-head" bis_skin_checked={1}>14-Day Pool</div><div className="up" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>38.86%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>13,149,168</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>735,929</div></div></div><div className="down" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div><div className="card-staking" bis_skin_checked={1}><div className="duration-head" bis_skin_checked={1}>14-Day Pool</div><div className="up" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>38.86%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>13,149,168</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>735,929</div></div></div><div className="down" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div><div className="card-staking" bis_skin_checked={1}><div className="duration-head" bis_skin_checked={1}>14-Day Pool</div><div className="up" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>38.86%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>13,149,168</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>735,929</div></div></div><div className="down" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div><div className="card-staking" bis_skin_checked={1}><div className="duration-head" bis_skin_checked={1}>14-Day Pool</div><div className="up" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>38.86%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>13,149,168</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>735,929</div></div></div><div className="down" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div><div className="card-staking" bis_skin_checked={1}><div className="duration-head" bis_skin_checked={1}>14-Day Pool</div><div className="up" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head1" bis_skin_checked={1}>APY</div><div className="val1" bis_skin_checked={1}>38.86%</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Total staked</div><div className="val" bis_skin_checked={1}>13,149,168</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Tokens rewarded</div><div className="val" bis_skin_checked={1}>735,929</div></div></div><div className="down" bis_skin_checked={1}><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your stake</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Your token rewards</div><div className="val" bis_skin_checked={1}>0</div></div><div className="one" bis_skin_checked={1}><div className="head" bis_skin_checked={1}>Unlock date</div><div className="val" bis_skin_checked={1}>—</div></div></div></div></div></div></div>

                </div>
            </div>
        </>

    )
}
