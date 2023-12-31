import React, { useState } from "react";
import { getColorByPerimeter } from "../helper";
import InputElement from "../components/InputElement";

const Circle = ({ radius }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 2 * Math.PI * radius;
  };

  const perimeter = calculatePerimeter();
  const [color, setColor] = React.useState(getColorByPerimeter(perimeter));

  return (
    <article>
      <div
        style={{
          height: `${2 * radius}px`,
          width: `${2 * radius}px`,
          borderRadius: "50%",
          backgroundColor: isHovered ? color : "grey",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter().toFixed(2)} px</p>
      <InputElement name='Circle color' type='text' setColor={setColor} />
    </article>
  );
};

export default Circle;
