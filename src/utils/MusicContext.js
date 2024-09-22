import React, { createContext, useContext, useRef, useEffect } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const audioRef = useRef(new Audio('../assets/music/music.mp3'));

    // useEffect(() => {
    //     audioRef.current.loop = true;
    //     audioRef.current.play();

    //     return () => {
    //         audioRef.current.pause(); // Optional: Pause music on unmount if needed
    //     };
    // }, []);

    return (
        <MusicContext.Provider value={audioRef}>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    return useContext(MusicContext);
};
