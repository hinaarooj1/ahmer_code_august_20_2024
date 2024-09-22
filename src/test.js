import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise'; // Import the 3D noise function

const BackgroundCanvas = () => {
    const rayCount = 500;
    const rayPropCount = 8;
    const rayPropsLength = rayCount * rayPropCount;
    const baseLength = 200;
    const rangeLength = 200;
    const baseSpeed = 0.05;
    const rangeSpeed = 0.1;
    const baseWidth = 10;
    const rangeWidth = 20;
    const baseHue = 120;
    const rangeHue = 60;
    const baseTTL = 50;
    const rangeTTL = 100;
    const noiseStrength = 100;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    const backgroundColor = 'hsla(220,60%,3%,1)';

    const canvasRef = useRef();
    const ctxRef = useRef();
    const tickRef = useRef(0);
    const noise3DRef = useRef(); // Reference for the noise function
    const rayPropsRef = useRef();

    const rand = (max) => Math.random() * max;
    const round = (num) => Math.round(num);
    const fadeInOut = (life, ttl) => Math.max(0, Math.min(1, (ttl - life) / ttl));

    const initRay = (i) => {
        const length = baseLength + rand(rangeLength);
        const x = rand(canvasRef.current.width);
        const y1 = canvasRef.current.height / 2 + noiseStrength;
        const y2 = y1 - length;
        const n = noise3DRef.current(x * xOff, y1 * yOff, tickRef.current * zOff) * noiseStrength;
        const newY1 = y1 + n;
        const newY2 = y2 + n;
        const life = 0;
        const ttl = baseTTL + rand(rangeTTL);
        const width = baseWidth + rand(rangeWidth);
        const speed = baseSpeed + rand(rangeSpeed) * (round(rand(1)) ? 1 : -1);
        const hue = baseHue + rand(rangeHue);

        rayPropsRef.current.set([x, newY1, newY2, life, ttl, width, speed, hue], i);
    };

    const initRays = () => {
        noise3DRef.current = createNoise3D(); // Create an instance of the noise function
        rayPropsRef.current = new Float32Array(rayPropsLength);
        for (let i = 0; i < rayPropsLength; i += rayPropCount) {
            initRay(i);
        }
    };

    const updateRay = (i) => {
        let [x, y1, y2, life, ttl, width, speed, hue] = rayPropsRef.current.slice(i, i + rayPropCount);

        drawRay(x, y1, y2, life, ttl, width, hue);

        x += speed;
        life++;

        rayPropsRef.current[i] = x;
        rayPropsRef.current[4 + i] = life;

        if (checkBounds(x) || life > ttl) {
            initRay(i);
        }
    };

    const drawRay = (x, y1, y2, life, ttl, width, hue) => {
        const gradient = ctxRef.current.createLinearGradient(x, y1, x, y2);
        gradient.addColorStop(0, `hsla(${hue},100%,65%,0)`);
        gradient.addColorStop(0.5, `hsla(${hue},100%,65%,${fadeInOut(life, ttl)})`);
        gradient.addColorStop(1, `hsla(${hue},100%,65%,0)`);

        ctxRef.current.save();
        ctxRef.current.beginPath();
        ctxRef.current.strokeStyle = gradient;
        ctxRef.current.lineWidth = width;
        ctxRef.current.moveTo(x, y1);
        ctxRef.current.lineTo(x, y2);
        ctxRef.current.stroke();
        ctxRef.current.closePath();
        ctxRef.current.restore();
    };

    const checkBounds = (x) => x < 0 || x > canvasRef.current.width;

    const resize = () => {
        const { innerWidth, innerHeight } = window;

        canvasRef.current.width = innerWidth;
        canvasRef.current.height = innerHeight;
        ctxRef.current.fillStyle = backgroundColor;
        ctxRef.current.fillRect(0, 0, innerWidth, innerHeight);
    };

    const render = () => {
        ctxRef.current.save();
        ctxRef.current.filter = 'blur(12px)';
        ctxRef.current.globalCompositeOperation = 'lighter';
        ctxRef.current.drawImage(canvasRef.current, 0, 0);
        ctxRef.current.restore();
    };

    const draw = () => {
        tickRef.current++;
        ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctxRef.current.fillStyle = backgroundColor;
        ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (let i = 0; i < rayPropsLength; i += rayPropCount) {
            updateRay(i);
        }

        render();

        window.requestAnimationFrame(draw);
    };

    useEffect(() => {
        canvasRef.current = document.createElement('canvas');
        ctxRef.current = canvasRef.current.getContext('2d');

        document.body.appendChild(canvasRef.current);
        resize();
        initRays();
        draw();

        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
            document.body.removeChild(canvasRef.current);
        };
    }, []);

    return null; // This component does not render any visible UI elements
};

export default BackgroundCanvas;
