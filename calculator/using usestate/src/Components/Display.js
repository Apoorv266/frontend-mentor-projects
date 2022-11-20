import React from "react";
import "../Styles/Display.css";

const Display = ({ firstDig, disResult, screenBackground }) => {
  return (
    <div className="display-bar" style={screenBackground}>
      {disResult ? <div className="display-txt">
        <h1>{firstDig.result}</h1>
      </div> : <div className="display-txt">
        <h1>{firstDig.firstDigit}</h1>
        <h1>{firstDig.operator}</h1>
        <h1>{firstDig.secondDigit}</h1>
      </div>}
    </div>
  );
};

export default Display;
