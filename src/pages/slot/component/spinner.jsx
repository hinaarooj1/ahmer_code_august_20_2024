"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import musicWav from "../../../assets/music/music.wav";
import { useNavigate } from "react-router-dom";
// import html2canvas from 'html2canvas';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import slot_machine from '../../../assets/new_image/slot-machine.png';
import axios from "axios"; 
// import Image from "next/image";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import LoseOrWin from "./LoseOrWin";
import copy from 'copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Notification from "./Notification";
let BASE_URL = 'http://localhost:4000';
const Spinner = ({
  state,
  loadingFile,
  setSign,
  sign,
  address,
  roll,
  setRoll,
  paramsSlug
}) => {
  const navigate = useNavigate();
  const [snapshot, setSnapshot] = useState(null);
  const [allSlug, setAllSlug] = useState(paramsSlug || "");
  const [clicked, setClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [disable, setDisable] = useState(false);
  const [id, setId] = useState(null)
  const [views, setViews] = useState(0);
  const [url, setUrl] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [showImage, setShowImage] = useState(false)
  const [message, setMessage] = useState(null)
  const [temp, setTemp] = useState(null)
  const [output, setOutput] = useState([]);
  const [slugCount, setSlugCount] = useState(0)
  const network = WalletAdapterNetwork.Devnet;
  function shouldRenderDiv(allSlug) {
    var elements = allSlug.split("-");

    if (elements.length < 5) {
      console.log("Not enough elements to perform the check.");
      return false;
    }

    const first = elements[0];
    const third = elements[2];
    const fifth = elements[4];

    const result = first === third && first === fifth && third === fifth;
    return result;
  }
  const walletConnectionErr = (error = WalletError) => {
    console.log("Wallet Connection Error:", error);
  };
  // console.log(walletConnectionErr, "walletConnectionErr");
  const sendMoney = () => {
    console.log("first");
  };
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };
  const handleDropdownChange = (value) => {
    setIsDropdownOpen(false);
  };
  // const takeSnapshot = () => {
  //   navigate(`/share/${allSlug.slice(0)}`);
  // const divToCapture = document.getElementById("mainDiv");
  // console.log(divToCapture, "divvvvvv");

  // toPng(divToCapture)
  //   .then(async function (dataUrl) {
  //     const form = new FormData();
  //     form.append("file", dataUrl);
  //     const res=await axios.post("api/share",form)
  //     console.log(res.data.FinalData,"ressssss")
  //     navigate(`/share/${res.data.FinalData}`);
  //     setSnapshot(dataUrl);
  //   })
  //   .catch(function (error) {
  //     console.error("oops, something went wrong!", error);
  //   });
  // };
  // console.log(allSlug, "allSlugallSlugallSlug");
  const takeSnapImage = () => {
    setLoader(true);
    const divToCapture = document.getElementById("mainDiv");
    console.log(divToCapture, "divvvvvv");

    toJpeg(divToCapture)
      .then(async function (dataUrl) {
        console.log(dataUrl, "dataUrldataUrl")
        const canvas = document.createElement('canvas'); // Create a new canvas element
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Enable cross-origin access if needed
        img.src = dataUrl;

        img.onload = async () => {
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image
          ctx.drawImage(img, 0, 0);

          // Set watermark properties
          ctx.font = '30px Arial';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White color with 50% opacity
          ctx.textAlign = 'right';
          ctx.textBaseline = 'bottom';

          // Add the watermark text
          ctx.fillText("memenator.com", canvas.width - 10, canvas.height - 10);
          console.log(canvas, "Ddd")
          // Convert canvas to data URL with watermark
          const watermarkedDataUrl = canvas.toDataURL();
          console.log(watermarkedDataUrl, "watttttt")
          // Create FormData and append the watermarked image

          try {
            const form = new FormData();
            form.append("file", watermarkedDataUrl);
            // Send FormData to API endpoint using axios
            const response = await axios.post("api/share", form);
            console.log(response.data.FinalData);
            setLoader(false);
            // Open the share link in a new tab
            const res = await axios.post(`${BASE_URL}/api/share/image/${response.data.FinalData}`);
            setUrl(res.data.output.Sharefile);
            setId(response.data.FinalData)
            // window.open(`/share/image/${response.data.FinalData}`, "_blank");
            setSnapshot(dataUrl); // Optionally set the original image URL to state
          } catch (error) {
            console.error("Error uploading image:", error);
            setLoader(false);
            // Handle error, e.g., show error message
          }
        };
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  const handleButtonClick = () => {
    navigate("/admin");
  };
  const audioUrl = musicWav;

  // console.log(loadingFile, "i am inslinner");
  const playAudio = async () => {
    const audio = new Audio(audioUrl);
    audio.loop = false;
    await audio.play();
    // setAudioPlayed(true);
  };

  let final;
  if (state) {
    final = state
      .map((item) => {
        // console.log(item, "tiememem");
        if (item.text1 || item.text2) {
          if (item.text1) {
            return { type: "text1", value: item.text1 };
          } else {
            return { type: "text2", value: item.text2 };
          }
        } else if (item.file) {
          return { type: "image", value: item.file };
        }
        return null; // Ensure to handle other types of content properly if any
      })
      .filter((item) => item !== null); // Remove null items if any
  }

  useEffect(() => {
    let items = final;

    const doors = document.querySelectorAll(".door");
    // let spinCount = 0;

    const spin = async () => {
      const slideDuration = 7000;
      let delayBetweenDoors = 600; // initial delay




      // Update content
      updateContent();

      // Slide down current content
      await slideDownContent(slideDuration);

      // Wait for a short delay before starting the slide up
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Slide up new content with delay between each door's animation
      await slideUpContent(slideDuration, delayBetweenDoors);
    };

    const slideDownContent = async (slideDuration) => {
      const maxHeight = Math.max(
        ...Array.from(doors, (door) => door.offsetHeight)
      ); // Get the maximum height among all doors
      const promises = []; // Array to hold promises for each door's animation
      for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        boxes.style.transition = `transform ${slideDuration / 1000
          }s cubic-bezier(0.25, 0.46, 0.45, 0.94)`; // Apply transition
        const promise = new Promise((resolve) => {
          boxes.addEventListener("transitionend", () => resolve(), {
            once: true,
          }); // Resolve the promise when transition ends
        });
        promises.push(promise); // Add the promise to the array
        boxes.style.transform = `translateY(${maxHeight}px)`; // Slide content down
        boxes.style.opacity = 1; // Show the content
      }
      await Promise.all(promises); // Wait for all doors' animations to finish
    };

    const slideUpContent = async (slideDuration, delayBetweenDoors) => {
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        const boxes = door.querySelector(".boxes");
        const doorHeight = door.offsetHeight; // Get the height of the door
        boxes.style.transition = `none`; // Disable transition temporarily
        boxes.style.transform = `translateY(-${doorHeight}px)`; // Initial position at the top
        boxes.style.opacity = 0; // Hide the content
        // Trigger reflow
        void boxes.offsetHeight; // This line forces a reflow, which is necessary to apply the next transition smoothly
        boxes.style.transition = `transform ${slideDuration / 1000
          }s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${slideDuration / 1000
          }s ease`; // Reapply transition
        // setTimeout(() => {
        //   boxes.style.transform = `translateY(0)`; // Slide content up
        //   boxes.style.opacity = 1; // Show the content
        // }, delayBetweenDoors * i); // Apply delay based on index
        boxes.style.transform = `translateY(0)`; // Slide content down
        boxes.style.opacity = 7; // Show the content with animation
        await new Promise((resolve) => setTimeout(resolve, delayBetweenDoors)); // Wait for delay between door
      }
      await new Promise((resolve) => setTimeout(resolve, slideDuration)); // Wait for all doors to finish sliding up
    };


    const updateContent = () => {
      init();

      const visibleContent = [];

      setTimeout(() => {
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i];
          const boxes = door.querySelector(".boxes");
          try {
            const transformValue = window
              .getComputedStyle(boxes)
              .getPropertyValue("transform");

            if (transformValue && transformValue !== "none") {
              const translateY = parseInt(transformValue.split(",")[5].trim());

              const visibleBoxIndex = Math.round(
                Math.abs(translateY / door.clientHeight)
              );

              const visibleBox = boxes.children[visibleBoxIndex];
              if (visibleBox) {
                let type, value, slug;
                if (visibleBox.querySelector("img")) {
                  type = "image";
                  const imgSrc = visibleBox.querySelector("img").src;
                  const correspondingStateItem = state.find(
                    (item) => item.file === imgSrc
                  );
                  slug = correspondingStateItem
                    ? correspondingStateItem.Slug
                    : "";
                  value = { type: "image", src: imgSrc, slug };
                } else {
                  const text = visibleBox.textContent.trim();

                  type = "text" + (i === 1 ? 1 : 2);
                  const correspondingStateItem = state.find(
                    (item) => item[type] === text
                  );
                  slug = correspondingStateItem
                    ? correspondingStateItem.Slug
                    : "";

                  value = text;
                  // console.log(slug, "Gggggggggggggggggg");
                }
                visibleContent.push({ type, value, slug });
              }
            }
          } catch (error) {
            console.error("Error while getting visible content:", error);
          }
        }
        setAllSlug("");

        // console.log(visibleContent, "comeetettet");
        for (let j = 0; j < visibleContent.length; j++) {
          const currentItem = visibleContent[j];
          const currentSlug = currentItem.slug;

          // Check the type of the current item
          if (currentItem.type === "text1" || currentItem.type === "text2") {
            setAllSlug((prevSlugs) => {
              if (prevSlugs === "") {
                return currentItem.value; // Set value if prevSlugs is empty
              }
              return `${prevSlugs}-${currentItem.value}`; // Concatenate value
            });
          } else {
            setAllSlug((prevSlugs) => {
              if (prevSlugs === "") {
                return currentSlug; // Set slug if prevSlugs is empty
              }
              return `${prevSlugs}-${currentSlug}`; // Concatenate slug
            });
          }
        }
      }, 12000);
    };
    const init = (firstInit = true, groups = 1, duration = 1) => {
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (firstInit) {
          door.dataset.spinned = "0";
        } else if (door.dataset.spinned === "1") {
          return;
        }

        const boxes = door.querySelector(".boxes");
        const boxesClone = boxes.cloneNode(false);

        let pool = [];
        if (i === 1) {
          // Only text for 2nd and 4th door
          pool = items?.filter((item) => item.type === "text1") || [];
        } else if (i === 3) {
          pool = items?.filter((item) => item.type === "text2") || [];
        } else {
          // Images/emojis for other doors
          pool = items?.filter((item) => item.type === "image") || [];
        }

        // Check if pool is empty
        if (pool.length === 0) {
          console.warn(`No items found for door ${i}`);
          continue; // Skip this door if no items are found
        }

        // Shuffle the pool to randomize content
        pool = shuffle(pool);
        console.log('pool: ', pool.length);

        for (let j = pool.length - 1; j >= 0; j--) {
          const box = document.createElement("div");
          box.classList.add("box");
          box.style.width = `${door.clientWidth / 5}px`;
          box.style.height = door.clientHeight + "px";
          if (pool[j].type === "emoji") {
            box.textContent = pool[j].value;
          } else if (pool[j].type === "image") {
            const image = document.createElement("img");
            image.src = pool[j].value;
            image.alt = "Image";
            image.style.width = "100%";
            image.style.height = "100%";
            box.appendChild(image);
          } else if (pool[j].type === "text1" || pool[j].type === "text2") {
            box.textContent = pool[j].value;
          }
          boxesClone.appendChild(box);
        }

        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
        door.replaceChild(boxesClone, boxes);
      }
    };


    const shuffle = (arr) => {
      if (!Array.isArray(arr) || arr.length === 0) {
        // If `arr` is not an array or is empty, return it as is.
        return arr;
      }

      let currentIndex = arr.length;
      let temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex > 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }

      return arr;
    };



    const TicketSpin = () => {
      const form = new FormData();
      // Using FormData to handle data submission
      form.append("address", address);
      // Checking if roll is null or undefined and not appending if it is
      if (roll !== null && roll !== undefined) {
        form.append("roll", roll.roll - 1);
      }
      // Assuming roll.freeSpin is a number and subtracting 1
      if (roll && roll.freeSpin !== undefined) {
        form.append("freeSpin", roll.freeSpin);
      }

      try {
        if (address && (roll.roll )) {

          (async function () {
            const resp = await axios.post("/api/rollCount", form);
            // console.log(resp.data, "Response from server");
            setRoll(resp.data.allRoll)
          })();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };




    const freeSpinAPI = () => {
      const form = new FormData();
      // Using FormData to handle data submission
      form.append("address", address);
      // Checking if roll is null or undefined and not appending if it is
      if (roll !== null && roll !== undefined) {
        form.append("roll", roll.roll);
      }
      // Assuming roll.freeSpin is a number and subtracting 1
      if (roll && roll.freeSpin !== undefined) {
        form.append("freeSpin", roll.freeSpin - 1);
      }

      try {
        if (address && (roll.roll )) {

          (async function () {
            const resp = await axios.post("/api/rollCount", form);
            console.log(resp.data, "Response from server");
            setRoll(resp.data.allRoll)

          })();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
    // console.log(freeSpinAPI, "freeSpinfreeSpin")
    const handleClickSpinnerFree = () => {
      spin();
      setDisable(true)
      setSign(false)
      setClicked(false);
      setTemp(null)
      setViews(0)
      setId(null)
      playAudio();
      setTimeout(() => {
        setDisable(false)
        setClicked(true);
        // setIsModalOpen(true);
      }, 15000);
      // freeSpinAPI()
    };
    if (allSlug) {
      const callingRenderDiv = () => {
        setStatus(shouldRenderDiv(allSlug));
      };
      callingRenderDiv();
    }
    const handleClickSpinner = () => {
      // var temp=shouldRenderDiv(allSlug)
      spin();
      setDisable(true)
      setClicked(false);
      setTemp(null)
      setViews(0)
      setId(null)
      setSign(false);
      playAudio();
      // if(allSlug.length>0){
      //   console.log(allSlug.length,"ttttttttttttttttttttttttt")
      //   setStatus(shouldRenderDiv(allSlug))
      // }
      TicketSpin()
      setTimeout(() => {
        // callingRenderDiv()
        setClicked(true);
        setDisable(false)
        setIsModalOpen(true);
      }, 15000);
    };

    const handleClickReset = () => {
      init();
    };
    document
      .querySelector("#spinnerFree")
      ?.addEventListener("click", handleClickSpinnerFree);
    document
      .querySelector("#spinner")
      ?.addEventListener("click", handleClickSpinner);
    // document.querySelector("#reseter").addEventListener("click", handleClickReset);

    // Clean up event listeners on unmount
    return () => {
      document
        .querySelector("#spinner")
        ?.removeEventListener("click", handleClickSpinner);
      // document.querySelector("#reseter").removeEventListener("click", handleClickReset);
    };
  }, [final]);

  const downloadSnapshot = () => {
    if (snapshot) {
      const link = document.createElement("a");
      link.href = snapshot;
      link.download = "snapshot.png"; // You can change the filename here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      return;
    }
  };

  const dropdownRef = useRef(null);
  const dropdownAdminRef = useRef(null);



  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };


  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleAdminDropdown = () => setIsAdminOpen(!isAdminOpen);



  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownAdminRef.current &&
        !dropdownAdminRef.current.contains(event.target)
      ) {
        setIsAdminOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownAdminRef]);

  // var shouldRenderDiv;
  const [ip, setIp] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        if (response && id) {
          //@ts-ignore
          const ViewData = await axios.post(`${BASE_URL}/api/view/${response.data.ip}/${id}`);
          setViews(ViewData.data.Views)
          setIp(response.data.ip);
        }
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, [id && ip]);
  useEffect(() => {
    const data = async () => {
      if (id) {
        //@ts-ignore
        const res = await axios.post(`${BASE_URL}/api/share/image/${id}`);

        setUrl(res.data.output.Sharefile);
      }
    };
    data();
  }, [id]);


  useEffect(() => {
    if (allSlug) {
      const findViewOfSlug = async () => {
        const response = await axios.get('https://api.ipify.org?format=json');
        const form = new FormData();
        form.append("allSlug", allSlug);
        form.append("ip", response.data.ip);
        const SlugView = await axios.post(`${BASE_URL}/api/slug`, form)
        setSlugCount(SlugView.data.ipCount)
      }
      findViewOfSlug()
    }
  }, [allSlug])
  useEffect(() => {
    let temps
    let arr = []
    if (allSlug && paramsSlug) {
      //@ts-ignore
      setTemp(decodeURIComponent(allSlug.split("-")).split(","))
      //@ts-ignore
      temps = decodeURIComponent(allSlug.split("-")).split(",")
      arr.push(temps[0])
      arr.push(temps[2])
      arr.push(temps[4])
    }

    const concatenatedString = arr.join("-");

    const data = async () => {
      if (concatenatedString) {
        //@ts-ignore
        const res = await axios.post(`${BASE_URL}/api/share/getData/${concatenatedString}`);
        setOutput(res.data.data);
      }
    };
    data();
  }, [allSlug && paramsSlug])
  const toogleImage = () => {
    setShowImage(true)
  }
  const copySlugUrl = () => {
    setMessage("link copied")
    copy(`https://slotnew.testdrivesite.com/?slug=${allSlug.slice(0)}`);
    let temps
    let arr = []
    if (allSlug) {

      //@ts-ignore
      setTemp(decodeURIComponent(allSlug.split("-")).split(","))
      //@ts-ignore
      temps = decodeURIComponent(allSlug.split("-")).split(",")
      arr.push(temps[0])
      arr.push(temps[2])
      arr.push(temps[4])
    }

    const concatenatedString = arr.join("-");
    console.log(concatenatedString, "concatenatedStringconcatenatedString");
    const data = async () => {
      if (concatenatedString) {

        //@ts-ignore
        const res = await axios.post(`${BASE_URL}/api/share/getData/${concatenatedString}`);
        // console.log(res, "ressss")
        setOutput(res.data.data);
      }
    };
    data();
    setTimeout(() => {
      setMessage(null);
    }, 6000);
  }
  const copyImageUrl = () => {
    copy(`${url}`);
    // setTemp(null)
  }
  // console.log(roll, "allSlugallSlug")

  // console.log(output, "oututtuut")
  const rollValue = roll && roll.roll !== undefined ? roll.roll : '00';

  const handleClick = () => {
    if (roll.roll === undefined) {
      navigate("/buy")
    }
  };
  return (
    <div className="main-slot">
      <img src={slot_machine} alt="" />
      {message && <Notification message={message} />}
      {slugCount > 0 && <h4 className="slugCount">Slug View: {slugCount}</h4>}
      <div className="doors-outer">
        <div className="doors" id="mainDiv">
          <div className="door-w">
            <div className="door">
              <div className="boxes">
                <div className="box">
                  <img src={loadingFile[0]?.file1} />
                </div>
              </div>
            </div>
          </div>
          <div className="door-w">
            <div className="door">
              <div className="boxes">
                <div className="box">word slot 1</div>
              </div>
            </div>
          </div>
          <div className="door-w">
            <div className="door">
              <div className="boxes">
                <div className="box">
                  <img src={loadingFile[0]?.file1} />
                </div>
              </div>
            </div>
          </div>
          <div className="door-w">
            <div className="door">
              <div className="boxes">
                <div className="box">word slot 2</div>
              </div>
            </div>
          </div>

          <div className="door-w">
            <div className="door">
              <div className="boxes">
                <div className="box">
                  <img src={loadingFile[0]?.file1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="word-boxes">
        <div className="inner-slot">

          <div className="box">word slot 1</div>
        </div>
        <div className="inner-slot">

          <div className="box">word slot 2</div>
        </div>
        <div className="inner-slot">

          <div className="box">word slot 3</div>
        </div>
        <div className="inner-slot">

          <div className="box">word slot 4</div>
        </div>
        <div className="inner-slot">

          <div className="box">word slot 5</div>
        </div>
      </div> */}
      <div className="tickets-data">
        <h1><span>Ticket</span>  12</h1>
      </div>
      <div className="buttons justify-content-center  relative">

        <button
          id="spinnerFree"
        >
          <a class='holo-btn-reb' href='#'>
            <span class='cta-x'>Free Spin</span>
            <span class='skew top'></span>
            <span class='skew bottom'></span>
          </a>
          {/* <img src={'/img/free_spin.png'} width={141} height={36} alt="" className="img-fluid" /> */}
        </button>
        <div className="text-center terminator">
          Tickets
          <button className="wallet-button  d-flex" onClick={handleClick}>
            <h3>
              {rollValue} {roll && roll.freeSpin && <small>+{roll.freeSpin}</small>}
            </h3>
            {/* <span></span> */}
          </button>
        </div>


        {/* <button onClick={() => router.push("/buy")}>
        Purchase Plan
      </button> */}
        {isModalOpen && clicked && (
          <>
            <LoseOrWin
              status={status}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setClicked={setClicked}
              address={address}
            />
          </>
        )}


        {clicked && (
          <>
            {loader && Modal(loader)}


            <div className="w-auto  ">
              <div>
                <div >
                  <button onClick={toggleDiv} className="on-right" id="dropdownDefaultButton">
                    <a class='holo-btn-reb' href='#'>
                      <span class='cta-x'>Share</span>
                      <span class='skew top'></span>
                      <span class='skew bottom'></span>
                    </a>
                    {/* <img src={'/img/share.png'} width={141} height={36} alt=""  className="img-fluid"/> */}
                  </button>

                </div>
              </div>
            </div>

            {showDiv && (
              <div
                className="dropdown-share"
              >
                <ul
                  className="dropdown-ul"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <FontAwesomeIcon className="copyIcon" icon={faCopy} style={{ color: "#ec0909", cursor: "pointer" }} size="1x" onClick={copySlugUrl} />
                    <button style={{ fontFamily: 'minecraft' }}>
                      {/* <a href={`/share/${allSlug.slice(0)}`} target="_blank" > */}
                      {`WWW://SLOTNEW...COM/../${allSlug.slice(0)}`}
                    </button>
                    {/* </a> */}

                  </li>
                  {!showImage && !id && <li onClick={() => handleDropdownChange("image")}> <button style={{ fontFamily: 'minecraft' }} onClick={takeSnapImage} id="dropdownDefaultButton">
                    Share Image Link
                  </button></li>}



                  {id && <li>
                    <FontAwesomeIcon className="copyIcon" icon={faCopy} style={{ color: "#ec0909", cursor: "pointer" }} size="1x" onClick={copyImageUrl} />
                    <button style={{ fontFamily: 'minecraft' }}>
                      {`WWW://SLOTNEW...COM/.../${id.slice(-3)}.jpg`}
                    </button>
                  </li>}

                </ul>


              </div>

            )}</>
        )}


      </div>
      <div className="text-center abs-giga">
        <button id="spinner" disabled={!roll || roll && !roll?.roll || roll?.roll == 0 || disable}>
          {/* <img src={'/ticketspin.png'} width={141} height={36} alt="" /> */}
          <a class='holo-btn-reb' href='#'>
            <span class='cta-x'>GIGABOOST</span>
            <span class='skew top'></span>
            <span class='skew bottom'></span>
          </a>
        </button>
      </div>
      <p className="info"></p>


      {id && views && <>

        <h1 style={{ color: "white" }}>Total views:{views}</h1>

        <div className="screen-shot">
          <img src={url} className="" />
        </div>

      </>}
      {output && temp && <>
        <div id="app1">
          <div className="doors-outer">
            <div className="doors" id="mainDiv">
              <div className="door-w">
                <div className="door">
                  <div className="boxes">
                    <div className="box">
                      {/**@ts-ignore */}
                      <img src={output[0]?.file} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="door-w">
                <div className="door">
                  <div className="boxes">
                    {/**@ts-ignore */}
                    <div className="box">{temp[1]}</div>
                  </div>
                </div>
              </div>
              <div className="door-w">
                <div className="door">
                  <div className="boxes">
                    <div className="box">
                      {/**@ts-ignore */}
                      <img src={output[1]?.file} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="door-w">
                <div className="door">
                  <div className="boxes">
                    {/**@ts-ignore */}
                    <div className="box">{temp[3]}</div>
                  </div>
                </div>
              </div>
              <div className="door-w">
                <div className="door">
                  <div className="boxes">
                    <div className="box">
                      {/**@ts-ignore */}
                      <img src={output[2]?.file} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>}
    </div>
  );
};

export default Spinner;

const Modal = (loader) => {
  return (
    <>
      {loader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-auto justify-center text-center p-6 rounded-lg">
            {loader && (
              <button
                type="button"
                className="bg-indigo-500 mx-auto relative py-2 px-4 rounded-md flex items-center justify-center text-white"
              >
                <svg
                  className="animate-spin h-5 w-5 mr-3 absolute left-0"
                  viewBox="0 0 24 24"
                ></svg>
                <span>
                  <div
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>{" "}
                  Processing...
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
