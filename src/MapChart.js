import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"


const geoUrl = process.env.PUBLIC_URL + "/europe.topojson";

const geoUrl2 =  "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

export default function MapChart() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}