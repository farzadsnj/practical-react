import React from "react";
import "./gb.css";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const ToolTip = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Tooltip
        title="Welcome to React"
        position="bottom"
        trigger="click"
        className="tooltip"
      >
        <button>Hover</button>
      </Tooltip>
    </div>
  );
};

export default ToolTip;
