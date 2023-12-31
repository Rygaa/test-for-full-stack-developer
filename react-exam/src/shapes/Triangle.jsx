import React, { useState } from "react";
import { getColorByPerimeter } from "../helper";
import InputElement from "../components/InputElement";

const Triangle = ({ sideLength }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 3 * sideLength;
  };

  const perimeter = calculatePerimeter();
  const [color, setColor] = React.useState(getColorByPerimeter(perimeter));

  return (
    <article>
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: `${sideLength / 2}px solid transparent`,
          borderRight: `${sideLength / 2}px solid transparent`,
          borderBottom: `${sideLength}px solid ${isHovered ? color : "gray"}`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter()} px</p>
      <InputElement
        name={"Triangle color"}
        type='text'
        setColor={setColor}
        perimeter={perimeter}
      />
    </article>
  );
};

export default Triangle;
