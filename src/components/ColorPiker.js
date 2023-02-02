import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPiker = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "close color picker" : "pick acolor"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h2>you picked {color}</h2>
    </div>
  );
};

export default ColorPiker;
