import React from "react";
import "../Styles/Keypad.css";

const Keypad = ({
  first,
  operation,
  clear,
  evaluate,
  del,
  keypadBackground,
  keyColor,
  spelbtn
  ,equalbtn
}) => {

  return (
    <>
      <div className="mainbody" style={keypadBackground}>
        <div className="keypad-body" >
          <button onClick={() => first(7)} style={keyColor}>7</button>
          <button onClick={() => first(8)} style={keyColor}>8</button>
          <button onClick={() => first(9)} style={keyColor}>9</button>
          <button onClick={() => del()} style={spelbtn}>DEL</button>
          <button onClick={() => first(4)} style={keyColor}>4</button>
          <button onClick={() => first(5)} style={keyColor}>5</button>
          <button onClick={() => first(6)} style={keyColor}>6</button>
          <button onClick={() => operation("+")} style={keyColor}>+</button>
          <button onClick={() => first(1)} style={keyColor}>1</button>
          <button onClick={() => first(2)} style={keyColor}>2</button>
          <button onClick={() => first(3)} style={keyColor}>3</button>
          <button onClick={() => operation("-")}style={keyColor}>-</button>
          <button onClick={() => first(".")} style={keyColor}>.</button>
          <button onClick={() => first(0)} style={keyColor}>0</button>
          <button onClick={() => operation("/")} style={keyColor}>/</button>
          <button onClick={() => operation("*")} style={keyColor}>x</button>
          </div>
          <div className="low-btn">
            <button className="reset" onClick={clear} style={spelbtn}>
              Reset
            </button>
            <button className="equal" onClick={evaluate} style={equalbtn}>
              =
            </button>
          </div>
       
      </div>
    </>
  );
};

export default Keypad;
