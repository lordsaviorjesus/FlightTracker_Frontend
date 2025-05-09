import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = process.env.PUBLIC_URL + "/europe.topojson";
const europeMarkers = [
  { name: "France", coordinates: [1.888334, 46.603354] },
  { name: "Germany", coordinates: [10.451526, 51.165691] },
  { name: "Italy", coordinates: [12.56738, 41.87194] },
  { name: "Spain", coordinates: [-3.74922, 40.463667] },
  { name: "United Kingdom", coordinates: [-3.435973, 55.378051] },
  { name: "Portugal", coordinates: [-8.224454, 39.399872] },
  { name: "Netherlands", coordinates: [5.291266, 52.132633] },
  { name: "Belgium", coordinates: [4.469936, 50.503887] },
  { name: "Switzerland", coordinates: [8.227512, 46.818188] },
  { name: "Austria", coordinates: [14.550072, 47.516231] },
  { name: "Denmark", coordinates: [9.501785, 56.26392] },
  { name: "Norway", coordinates: [8.468946, 60.472024] },
  { name: "Sweden", coordinates: [18.643501, 60.128161] },
  { name: "Finland", coordinates: [25.748151, 61.92411] },
  { name: "Ireland", coordinates: [-8.24389, 53.41291] },
  { name: "Poland", coordinates: [19.145136, 51.919438] },
  { name: "Czech Republic", coordinates: [15.472962, 49.817492] },
  { name: "Slovakia", coordinates: [19.699024, 48.669026] },
  { name: "Hungary", coordinates: [19.503304, 47.162494] },
  { name: "Greece", coordinates: [21.824312, 39.074208] },
  { name: "Romania", coordinates: [24.96676, 45.943161] },
  { name: "Bulgaria", coordinates: [25.48583, 42.733883] },
  { name: "Croatia", coordinates: [15.2, 45.1] },
  { name: "Slovenia", coordinates: [14.995463, 46.151241] },
  { name: "Estonia", coordinates: [25.013607, 58.595272] },
  { name: "Latvia", coordinates: [24.603189, 56.879635] },
  { name: "Lithuania", coordinates: [23.881275, 55.169438] },
  { name: "Ukraine", coordinates: [31.16558, 48.379433] },
  { name: "Serbia", coordinates: [21.005859, 44.016521] },
  { name: "Bosnia and Herzegovina", coordinates: [17.679076, 43.915886] },
  { name: "North Macedonia", coordinates: [21.4254, 41.9981] },
  { name: "Albania", coordinates: [20.168331, 41.153332] },
  { name: "Montenegro", coordinates: [19.37439, 42.708678] },
  { name: "Moldova", coordinates: [28.369885, 47.411631] },
  { name: "Iceland", coordinates: [-19.020835, 64.963051] },
  { name: "Faroe Islands", coordinates: [-6.9118, 61.8926] },
  { name: "Luxembourg", coordinates: [6.129583, 49.815273] },
  { name: "Russia", coordinates: [37.6173, 55.378051] },
  { name: "Belarus", coordinates: [27.953389, 53.709807] },
  { name: "Georgia", coordinates: [43.356892, 42.315407] },
  { name: "Azerbaijan", coordinates: [47.576927, 40.143105] },
  { name: "Armenia", coordinates: [45.038189, 40.069099] },
  { name: "Turkey", coordinates: [35.243322, 38.963745] },
  { name: "Cyprus", coordinates: [33.429859, 35.126413] },
  { name: "Israel", coordinates: [34.851612, 31.046051] },
  { name: "Malta", coordinates: [14.375416, 35.937496] },
];


export default function MapChart( {countryValue, setTestValue} ) {
  const orangeColor = "#FF5722";

  function handleCountryClick(countryName) {
    if (countryValue === countryName) {
      console.log("Deselected country:", countryName);
      setTestValue(null); // Deselect

    } else {
      setTestValue(countryName); // Select new one
      console.log("Selected country:", countryName);

    }
  }

  return (
    <ComposableMap
      width={2200}
      height={1400}
      projectionConfig={{
        scale: 850,
        center: [70, 20],
      }}
      style={{
        width: "250%",
        height: "auto",
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isSelected = countryValue === geo.properties.NAME;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleCountryClick(geo.properties.NAME)}
                style={{
                  default: {
                    fill: isSelected ? orangeColor : "#EEE",
                    outline: "none",
                  },
                  hover: {
                    fill: "#0000FF",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#0000FF",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
      
      
     



    </ComposableMap>
  );
}
