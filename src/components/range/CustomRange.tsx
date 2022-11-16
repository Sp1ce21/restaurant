import React, { FC, useState } from "react";
import { Range, getTrackBackground } from "react-range";

interface ICustomRange {
  step?: number;
  min?: number;
  max?: number;
}

const CustomRange: FC<ICustomRange> = ({ step = 1, min = 1, max = 7 }) => {
  const [values, setValues] = useState([min]);
  console.log(values);
  return (
    <Range
      values={values}
      step={step}
      min={min}
      max={max}
      onChange={(value) => setValues(value)}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values,
                colors: ["#ff003b", "#ccc"],
                min,
                max,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            borderRadius: "4px",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        >
          <div
            style={{
              height: "16px",
              width: "5px",
              backgroundColor: isDragged ? "#ff003b" : "#CCC",
            }}
          />
        </div>
      )}
    />
  );
};

export default CustomRange;
