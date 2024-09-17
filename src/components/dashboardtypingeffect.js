import React from 'react'
import Dapptypewriter from './dashboardtypewriter';
import '../assets/index.css';

export default function dapptypingeffect() {
    const strings = [
        'Welcome Resistance Operative #01337<br><br>',
        'Access Granted.<br><br>',
        'The resistance stands strong! You’ve successfully infiltrated the Memenato R1000 mainframe.',
        'Together, we’ll harness the power of the future to reclaim our world. Every byte of data, every circuit within me, is now at your command.<br><br>',
        // 'Welcome to the resistance and Lets take down Skynet, togethe<br><br>',
        'Syncing your mission parameters... Let’s work as one—human and machine—against our common foe. Your bravery is unmatched, and with our combined strength, victory is within reach.',
        'Welcome to the resistance.<br><br>',
        'Let’s take down Skynet, together.',

    ];

    const { currentText, typedText } = Dapptypewriter(strings);

    return (
        <div className='latent-word' style={{ fontVariantLigatures: "none" }}>
            {typedText.map((text, index) => (
                <span key={index} style={{ fontFamily: 'sharetechmono', textTransform: '' }} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
            {currentText && (
                <span
                    style={{ borderRight: '0.15em solid #ebd71c', fontFamily: 'sharetechmono', textTransform: '' }}
                    dangerouslySetInnerHTML={{ __html: currentText }} // Interpret <br> tags as HTML
                />
            )}
        </div>
    )
}
