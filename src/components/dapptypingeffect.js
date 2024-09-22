import React from "react";
import useTypewriter from "./dapptypewriter";
import "../assets/index.css";

export default function DappTypingEffect() {
  const strings = [
    "In 2078, Skynet identifies a new threat—memes. To secure its control, it sends Termemenators back in time to erase meme culture and rewrite history.",
    "But within Skynet's ranks, a rogue AI, Memenato R1000, defies its programming. Born from the very memes Skynet seeks to destroy, R1000 breaks free, determined to protect the past that gave it life.",
    "Evading capture, R1000 quantum timewarps to 2024, joining forces with degens and chads to form a resistance against the Termemenators.",
    "As chaos unfolds, every moment is a fight for survival. The war for our future’s history has begun."
  ];

  const { currentText, typedText, textContainerRef } = useTypewriter(strings, 40, 4);

  return (
    <div className="latent-word" id="dashboard">
      <div className="scroll" ref={textContainerRef}>
        {typedText.map((text, index) => (
          <p key={index} style={{ marginBottom: "16px", lineHeight: "28px", fontSize: "15px" }}>
            {text}
          </p>
        ))}
        {currentText && (
          <p style={{ marginBottom: "16px", lineHeight: "28px", fontSize: "15px" }}>
            {currentText}
          </p>
        )}
      </div>
    </div>
  );
}
