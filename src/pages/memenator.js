import CustomCursor from '../components/CustomCursor.js';
import Navbar from './Dashboardd/Navbar';
import Header2 from './Dashboardd/header2.js';
import './Dashboardd/dashboard.css';
import video from '../assets/images/dapp.mp4';
import PHWallet from "../components/wallet";
import Spinner from "./slot/component/spinner";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Connection, LAMPORTS_PER_SOL, publicKey } from "@solana/web3.js";
import { WalletError } from "@solana/wallet-adapter-base";
import { Button } from "@mui/material";
import { useLocation, useSearchParams } from 'react-router-dom';
import { useWallet } from "@solana/wallet-adapter-react";

import slotMachine from '../assets/new_image/slot-machine.png'

export default function Home() {
  const [roll, setRoll] = useState({})
  const [userSOLBalance, setSOLBalance] = useState(0);
  const [state, setState] = useState();
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [loadingFile, setLoadingFile] = useState([]);
  const [address, setAddress] = useState("")
  const [sign, setSign] = useState(false)
  const [pro, setPro] = useState();
  const [searchParams] = useSearchParams();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1440);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsSlug = queryParams.get('slug');

  const fetchLoadingData = async () => {
    try {
      const response = await axios.post("https://slotnew.testdrivesite.com/api/admin/landing/getLanding", {
        headers: {
          'Access-Control-Allow-Origin': '*',  // Replace '*' with your domain
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
      if (response.status === 200) {
        setLoadingFile(response.data.allData);
      } else {
        console.error(`Error fetching loading data: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching loading data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const allData = await axios.post("https://slotnew.testdrivesite.com/api/getSlotData", {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
      if (allData.status === 200 && allData?.data?.allData.length > 0) {
        setState(allData?.data?.allData);
      } else {
        console.error(`Error fetching data: ${allData.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchLoadingData();
  }, []);


  const handleButtonClick = () => {
    if (!audioPlayed) {
    }
  };

  useEffect(() => {
    handleButtonClick();
  }, [audioPlayed]);

  useEffect(() => {
    const getProvider = () => {
      if (typeof window !== 'undefined' && 'phantom' in window) {
        //@ts-ignore
        const provider = window.phantom?.solana;

        if (provider?.isPhantom) {
          return provider;
        }
      }

    };
    setPro(getProvider());
  }, []);



  const provider = pro;

  const walletAddress = async () => {
    try {
      //@ts-ignore
      const resp = await provider.connect();
      setAddress(resp.publicKey.toString());
      if (resp.publicKey.toString()) {
        const form = new FormData();
        //@ts-ignore
        form.append('address', resp.publicKey.toString());
        const rollData = await axios.post("https://slotnew.testdrivesite.com/api/buyRoll/getRoll", form, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        });
        if (rollData.status === 200) {
          setRoll(rollData.data.roll);
        } else {
          console.error(`Error fetching roll data: ${rollData.status}`);
        }
      }
      if (resp.publicKey) {
        //@ts-ignore
        const SOL = connection.getAccountInfo(resp.publicKey);
        SOL.then((res: any) => setSOLBalance(res && res?.lamports / LAMPORTS_PER_SOL));
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };

  useEffect(() => {
    walletAddress();
  }, []);
  const network = "https://api.devnet.solana.com";
  const connection = new Connection(network);

  const datasend = async () => {
    if (userSOLBalance <= 0) {
      alert("You have not enough SOL");
      return;
    }
    //@ts-ignore

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

  };

  const header2Style = {
    display: isSmallScreen ? 'block' : 'none',
    zIndex: 999,
  };
  return (
    <>
      <CustomCursor />
      <div className="dashboard-content m-0" style={{ maxWidth: '100%' }} >
        <Navbar style={navbarStyle} />
        <Header2 style={header2Style} />

      </div >
      <video
        className="dashboard-video"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      {/* <div style={{ marginTop: '12px',marginRight: '33px'}} className="d-sm-flex justify-content-end align-items-end d-none">
            <PHWallet />
          </div> */}
      <div style={{ background: 'transparent', marginTop: '95px' }}>

        <img src={slotMachine} className="slotbg" />
        <div className="giga-logo text-center">
          <h1>GIGAPOT</h1>
          <button className="token-credit-value btn-double Terminator">100<span></span></button>
        </div>
        <br />
        {/* {address ? (
            <h5 className="wallet-button">
              {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </h5>
          ) : (
            <button className="wallet-button " onClick={walletAddress}>
              Connect
            </button>
          )} */}

        <Spinner
          state={state}
          loadingFile={loadingFile}
          setSign={setSign}
          sign={sign}
          address={address}
          roll={roll}
          setRoll={setRoll}
          paramsSlug={paramsSlug || ""} // Ensure it's a string
        />
      </div>
    </>
  );
}

