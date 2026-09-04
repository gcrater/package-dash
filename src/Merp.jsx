import { useState } from 'react';
import FlightContent from './FlightContent.jsx';
import './App.css'

function Merp() {
    let [showContent, toggleContent] = useState(false);

    return (
        <>
        <div>
            <button 
                style={{ padding: '0.5rem' }}
                onClick={() => toggleContent((showContent) => !showContent)}>
                Show the flight data
            </button>
            <div>
                {showContent && <FlightContent/>}
            </div>
        </div>
        </>
    );
}

export default Merp;