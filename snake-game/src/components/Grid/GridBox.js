import React from "react";
import "./GridBox.css"; // Assuming you will create a separate CSS file for styles

export function GridBox({ snake, reward }) {
  const SIZE = 10; // Size in pixels for each box

  // Generate class names based on the snake and reward props
  const snakeClass = snake ? `snake ${snake}` : "";

  return (
    <div className="grid-box" style={{ width: SIZE, height: SIZE }}>
      {reward && <div className="reward-dot"></div>}
      <div className={snakeClass}></div>
    </div>
  );
}
