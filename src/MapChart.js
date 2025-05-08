import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = process.env.PUBLIC_URL + "/europe.topojson";

export default function MapChart() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const orangeColor = "#FF5722";

  function handleCountryClick(countryName) {
    if (selectedCountry === countryName) {
      console.log("Deselected country:", countryName);
      setSelectedCountry(null); // Deselect

    } else {
      setSelectedCountry(countryName); // Select new one
      console.log("Selected country:", countryName);

    }
  }

  return (
    <ComposableMap
      width={2200}
      height={1400}
      projectionConfig={{
        scale: 850,
        center: [40, 30],
      }}
      style={{
        width: "150%",
        height: "auto",
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isSelected = selectedCountry === geo.properties.NAME;

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
