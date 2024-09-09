import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Type = () => {
	const analysisRef = useRef(null);
	const trackingRef = useRef(null);
	const reportRef = useRef(null);
	const viewRef = useRef(null);

	useEffect(() => {
		// Remove filter-red_blur class after 500ms
		const timeoutId = setTimeout(() => {
			if (viewRef.current) {
				viewRef.current.classList.remove('filter-red_blur');
			}
		}, 500);

		// Typed.js for #report
		const typedReport = new Typed(reportRef.current, {
			strings: [
				"^2000<p>......</p>",
				"^1000<p>scan mode 43894</p>size assement<br/><br/>^1000<p><p>assesment complete<br/><br/></p>^500<p>fit probability 0.99<br/><br/></p>^500<p>reset to aquisition<br/>mode speech level 78<br/><br/></p>^500<p>priority override</p><p>defense systems set</p><p>active status</p><p>level 2347923 max</p>",
			],
			showCursor: false,
			loop: false,
		});

		// Typed.js for #analysis
		const analysisString =
			"^4000<h2>analysis:</h2>^1000<p class='glitch' data-text='6546546465461'>6546546465461</p>^200<p class='glitch' data-text='8989000054545'>8989000054545</p>^200<p class='glitch' data-text='5699878225255'>5699878225255</p>^200<p class='glitch' data-text='0233255714589'>0233255714589</p><p class='glitch' data-text='9412323687985'>9412323687985</p><p class='glitch' data-text='8885575522255'>8885575522255</p><p class='glitch' data-text='5646484513248'>5646484513248</p><p class='glitch' data-text='6546626233653'>6546626233653</p>";
		const typedAnalysis = new Typed(analysisRef.current, {
			strings: [analysisString],
			loop: false,
			showCursor: false,
			typeSpeed: 0,
			onComplete: () => {
				// Typed.js for #tracking
				const typedTracking = new Typed(trackingRef.current, {
					strings: ["^1000match <span class='square'>&#9632;</span>"],
					loop: false,
					showCursor: false,
					typeSpeed: 50,
					onComplete: () => {
						// Random number changing effect
						setInterval(() => {
							if (analysisRef.current) {
								const glitchElements =
									analysisRef.current.querySelectorAll("p.glitch");
								glitchElements.forEach((element) => {
									const newText = element.textContent.replace(/\d/g, () =>
										Math.floor(Math.random() * 9) + 1
									);
									element.textContent = newText;
									element.setAttribute("data-text", newText);
								});
							}
						}, 50); // Speed of number changing
					},
				});
			},
		});

		// Cleanup function to clear timeouts and intervals
		return () => {
			clearTimeout(timeoutId);
			typedReport.destroy();
			typedAnalysis.destroy();
		};
	}, []);

	return (
		<div>
			<link
				href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
				rel="stylesheet"
			/>
			<div className="view filter-red_blur" ref={viewRef}>
				<div id="analysis" className="frame" ref={analysisRef}></div>
				<div id="tracking" ref={trackingRef}></div>
				<div id="report" className="frame" ref={reportRef}></div>
			</div>
			<style>
				{`
       .filter-red {
	filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);
	
	&_blur {
		filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8) blur(4px) !important;
		transition: all 0.5s ease-in-out;
	}
}

.view {
	background: url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=c7de8d2410cabdfa96f645a7ef106c26) center no-repeat;
	background-size: cover;	
	width: 100vw;
	height: 100vh;
	transition: all 0.5s ease-in-out;
	.filter-red;
}

.ui {
	position: absolute;
	top: 50px; 
	right: 50px;
	bottom: 50px; 
	left: 50px;
	border: 2px solid rgba(255, 0, 0, 0.7); /* Thin neon-red border */
	animation: neon-glow 2s infinite;
	box-shadow: 0 0 15px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6), 0 0 45px rgba(255, 0, 0, 0.4);
}

@keyframes neon-glow {
	0% {
		box-shadow: 0 0 5px rgba(255, 0, 0, 0.6), 0 0 10px rgba(255, 0, 0, 0.4), 0 0 15px rgba(255, 0, 0, 0.2);
		border-color: rgba(255, 0, 0, 0.7);
	}
	50% {
		box-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.4);
		border-color: rgba(255, 0, 0, 1);
	}
	100% {
		box-shadow: 0 0 5px rgba(255, 0, 0, 0.6), 0 0 10px rgba(255, 0, 0, 0.4), 0 0 15px rgba(255, 0, 0, 0.2);
		border-color: rgba(255, 0, 0, 0.7);
	}
}

.frame {
	padding: 50px;
}

#analysis h2 {
	position: relative;
	display: inline-block;
	overflow: hidden;
	height: 60px;
	margin: 0;
	margin-bottom: 10px;
	padding-right: 15px;
}

#analysis h2::after {
	content: '*****************************';
	display: block;
	position: absolute;
	bottom: 0;
}

#tracking {
	position: absolute;
	bottom: 50px;
	left: 0; right: 0;
	min-height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 2em;
}

#report {
	position: absolute;
	top: 0;
	right: 0;
	min-width: 200px;
}

p {
	margin: 0;
}

.square {
	display: inline-block;
	font-size: 150%;
	animation: blink 1s infinite forwards ease;
}

@keyframes blink {
	0% {
		opacity: 0;	
	}
	100% {
		opacity: 1;
	}
}

/* Glitch Effect */
@keyframes glitch {
	0% {
		transform: translate(0);
		opacity: 1;
	}
	20% {
		transform: translate(-2px, 2px);
		opacity: 0.8;
	}
	40% {
		transform: translate(2px, -2px);
		opacity: 0.6;
	}
	60% {
		transform: translate(-2px, 2px);
		opacity: 0.8;
	}
	80% {
		transform: translate(2px, -2px);
		opacity: 1;
	}
	100% {
		transform: translate(0);
		opacity: 1;
	}
}

.glitch {
	animation: glitch 0.2s infinite;
	position: relative;
	color: #fff;
}

.glitch::before, .glitch::after {
	content: attr(data-text);
	position: absolute;
	left: 0;
}

.glitch::before {
	left: 2px;
	text-shadow: -2px 0 red;
	clip: rect(24px, 550px, 90px, 0);
	animation: glitch 0.2s infinite reverse;
}

.glitch::after {
	left: -2px;
	text-shadow: -2px 0 blue;
	clip: rect(85px, 550px, 140px, 0);
	animation: glitch 0.2s infinite reverse;
}

        `}
			</style>
		</div>
	);
};

export default Type;
