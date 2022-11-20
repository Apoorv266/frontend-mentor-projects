import React from "react";
import "../Styles/Keypad.css";
import { ACTIONS } from "../App"

const Keypad = ({
  dispatch,
  style
}) => {

  return (
    <>
      <div className="mainbody" style={style.keypadBackground}>
        <div className="keypad-body" >
          <button style={style.keyColor} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "7"})}>7</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "8"})} style={style.keyColor}>8</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "9"})} style={style.keyColor}>9</button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT})} style={style.spelbtn}>DEL</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "4"})} style={style.keyColor}>4</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "5"})} style={style.keyColor}>5</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "6"})} style={style.keyColor}>6</button>
          <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload : "+"})} style={style.keyColor}>+</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "1"})} style={style.keyColor}>1</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "2"})} style={style.keyColor}>2</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "3"})} style={style.keyColor}>3</button>
          <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload : "-"})} style={style.keyColor}>-</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "."})} style={style.keyColor}>.</button>
          <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload : "0"})} style={style.keyColor}>0</button>
          <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload : "/"})} style={style.keyColor}>/</button>
          <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload : "*"})} style={style.keyColor}>x</button>
          </div>
          <div className="low-btn">
            <button className="reset" onClick={() => dispatch({ type: ACTIONS.CLEAR})} style={style.spelbtn}>
              Reset
            </button>
            <button className="equal" onClick={() => dispatch({ type: ACTIONS.EVALUATE})} style={style.equalbtn}>
              =
            </button>
          </div>
       
      </div>
    </>
  );
};

export default Keypad;
