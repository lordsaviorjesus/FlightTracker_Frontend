import React from 'react';
import planeImg from './assets/plane.png';
import './App.css';
import MapChart from './MapChart';

function Plane() {
    return (
        <div className="plane-container">
            <h1>Welcome to the Plane Component</h1>
            <img src={planeImg} alt="Example" className="Plane-style"/>
        </div>
    );
}

export default Plane;