import React from "react";
import { getColorByPerimeter } from "../helper";

function InputElement({ name, type, setColor, perimeter }) {
  const color = getColorByPerimeter(perimeter);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}>
      <label htmlFor={name} style={{ fontSize: ".9rem", color: "grey" }}>
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        onChange={(event) => {
          let value = event.target.value;
          if (value === "") {
            setColor(color);
          } else setColor(value);
        }}
      />
    </div>
  );
}

export default InputElement;
