import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

let selected_country = ''

let mouseDown = false;
document.body.onmouseup = () => {
   mouseDown = true;
};
//  document.body.onmouseup = () => {
//     mouseDown = false;
//  };

const geoUrl = "/features.json";

const MapChart = ({setTooltipContent}) => {
  return (
    <div data-tip="">
      <ComposableMap>
        <ZoomableGroup>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                      if(mouseDown) {
                        console.log("hey im clicking");
                        
                        selected_country = (geo.properties.name);
                        console.log(selected_country);
                        mouseDown = false;
                      }
                      else{}
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#528AAE"
                      
                    },
                    hover: {
                      fill: "#75975e"
                      
                    }
                  }}
                  stroke="#000000"
                  strokeWidth={1.2}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
console.log(selected_country);
export default memo(MapChart);
