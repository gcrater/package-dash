import { useState } from 'react'
import data from './data/flightdata';

const statusColors = {
    Active: 'green',
    Boarding: 'blue',
    Delayed: 'yellow',
    Cancelled: 'red',
    Landed: 'gray'
};


function FlightContent() {
    const [selectedFlight, setSelectedFlight] = useState(null);

    const flights = data.map((flight) => {
        return (
            <div key={flight.id}>
                <button onClick={() => setSelectedFlight(flight)}>
                    {flight.origin} {'->'} {flight.dest}
                </button>
            </div>
        )
    })


    return (
        <>
        <div style={{display: 'flex'}}>
            <div className="red" style={{flex: 1}}>
                Flight Data
                {flights}
            </div>
            <div className="red" style={{flex: 2}}>
                {selectedFlight && <FlightDetails flight={selectedFlight} cancel={() => setSelectedFlight(null)} />}
            </div>
        </div>
        </>
    );
}

//  { id: "1", callsign: "UAL123", origin: "SFO", dest: "JFK", status: "Active", eta: "14:30" },

function FlightDetails({flight, cancel}) {
    return (<>
        <div>
            <div style={{textAlign: 'right'}}>
                <button
                    style={{textAlign: 'right', color: 'white', padding: '10px'}} 
                    onClick={() => cancel()}
                    title="Close">
                    X
                </button>
            </div>
            <h1>{flight.callsign}</h1>
            <h2>{flight.origin} to {flight.dest}</h2>

            <div style={{display:'flex', justifyContent: 'center'}}>
                <p style={{
                    backgroundColor: statusColors[flight.status]
                }}>
                    Status: {flight.status}
                </p>
            </div>
            <p>ETA: {flight.eta}</p>
        </div>
    </>)
}

export default FlightContent;