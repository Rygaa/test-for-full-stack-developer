import React, { useState } from "react";
import { getColorByPerimeter } from "../helper";
import InputElement from "../components/InputElement";

const Rectangle = ({ width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 2 * (width + height);
  };

  const perimeter = calculatePerimeter();
  const [color, setColor] = React.useState(getColorByPerimeter(perimeter));

  return (
    <article>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: isHovered ? color : "grey",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter()} px</p>
      <InputElement
        name='Rectangle color'
        type='text'
        setColor={setColor}
        perimeter={perimeter}
      />
    </article>
  );
};

export default Rectangle;
