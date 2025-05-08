import { grey } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';

const PlaneList = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textDisplay, setTextDisplay] = useState('Not set');

    useEffect(() => {
        fetch('http://localhost:5009/api/flight')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setFlights(data))
            .catch(err => console.log('Fetch error:', err))
            .finally(() => setLoading(false));
    }, []);

    // Update textDisplay based on loading or flights state
    useEffect(() => {
        if (loading) {
            setTextDisplay("Loading text....");
        } else if (!flights.length) {
            setTextDisplay("No flights available");
        } else {
            setTextDisplay("Flights loaded successfully");
            console.log("Flights:", flights);
        }
    }, [loading, flights]);  // Only trigger this effect when `loading` or `flights` changes

    return (
        <div className='List-container'>
            <h4>Flight List</h4>
            <p>{textDisplay}</p>
            <ul className='List-item'>
                    {flights.map((flight, index) => (
                            <li key={flight[0] || index}> {/* Using `icao24` (flight[0]) or fallback to index */}
                                <strong>ICAO24:</strong> {flight[0] || "No ICAO24"}<br />
                                <strong>Callsign:</strong> {flight[1]?.trim() || "No Callsign"}<br />
                                <strong>Origin Country:</strong> {flight[2] || "N/A"}<br />
                                <strong>Velocity:</strong> {flight[9] ? `${flight[9]} m/s` : "N/A"}
                                {/* You can add more details here */}
                            </li>
                        ))}
            </ul>
        </div>
    );
};

export default PlaneList;
