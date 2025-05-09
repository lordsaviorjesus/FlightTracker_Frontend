import { grey } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';
import getCountry from './MapChart';

const PlaneList = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textDisplay, setTextDisplay] = useState('Not set');
    const [selectedFlightId, setSelectedFlightId] = useState(null);

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

    const handleFlightClick = (flight) => {
        setSelectedFlightId(flight.id); // Set the selected flight ID
    };

    return (
        <div className='List-container'>
            <p>test</p>
            <h4>Flight List</h4>
            <p>{textDisplay}</p>
            <ul className='List-item'>
                {flights.map((flight, index) => {
                    // Check if the flight is selected
                    const isSelected = selectedFlightId === flight.id;

                    return (
                        <li
                            key={flight.id || index}
                            onClick={() => handleFlightClick(flight)} // Set the flight as selected on click
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                listStyleType: 'none',
                                borderBottom: '1px solid #ccc',
                                backgroundColor: isSelected ? '#e0f7fa' : 'transparent', // Highlight selected
                                fontWeight: isSelected ? 'bold' : 'normal', // Bold if selected
                            }}
                        >
                            <strong>ICAO24:</strong> {flight.icao24 || "N/A"}<br />
                            <strong>Callsign:</strong> {flight.callsign?.trim() || "N/A"}<br />
                            <strong>Origin Country:</strong> {flight.origincountry || "N/A"}<br />
                            <strong>Velocity:</strong> {flight.velocity ? `${flight.velocity} m/s` : "N/A"}
                            <br /><br />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PlaneList;
