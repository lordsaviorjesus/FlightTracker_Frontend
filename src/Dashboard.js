// Dashboard.js
import React, { useState } from 'react';
import MapChart from './MapChart';
import PlaneList from './PlaneList';
import Container from '@material-ui/core/Container';

const Dashboard = () => {

    const [countrySelected, setTestValue] = useState(null);
    
  return (
    <div className="App">
      <header className="App-header">
        <PlaneList />
        <Container
          className="Map-container"
          disableGutters
          maxWidth={false}
        >
          <MapChart 
            countryValue = {countrySelected}
            setTestValue = {setTestValue}
            className="map-style"
            width={2200}
            height={1400}
            projectionScale={750}
          />
        </Container>
      </header>
    </div>
  );
};

export default Dashboard;