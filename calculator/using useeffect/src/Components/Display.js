import React from "react";
import "../Styles/Display.css";

const Display = ({ style, state}) => {
  return (
    <div className="display-bar" style={style.screenBackground}>
      {state.viewresult ? <div className="display-txt" style={style.slideText}>
        <h1>{state.result}</h1>
      </div> : <div className="display-txt" style={style.slideText}>
        <h1>{state.firstDigit}</h1>
        <h1>{state.operator}</h1>
        <h1>{state.secondDigit}</h1>
      </div>}
    </div>
  );
};

export default Display;
