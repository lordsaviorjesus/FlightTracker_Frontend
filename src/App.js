import logo from './logo.svg';
import './App.css';
import MapChart from './MapChart';
import { useEffect,useState } from 'react';
import Container from '@material-ui/core/Container';
import PlaneList from './PlaneList';

function App() {
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
            className="map-style"
            width={2200}
            height={1400}
            projectionScale={750}
          />
        </Container>
      </header>
    </div>
  );
}

export default App;
