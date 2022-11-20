import React, { useReducer, useState, useEffect } from "react";
import Display from "./Components/Display";
import Keypad from "./Components/Keypad";
import ThemeSlider from "./Components/ThemeSlider";
import "./Styles/Body.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {

    case ACTIONS.ADD_DIGIT:


      if (state.operator !== "") {
        if (payload == "0" && state.secondDigit == "0") {
          return {
            ...state,
            secondDigit: "0",
            viewresult: false
          }
        } else if (state.secondDigit.includes(".")) {
          if (payload !== ".") {
            return {
              ...state,
              secondDigit: `${state.secondDigit}${payload}`,
              viewresult: false
            }
          }
        } else if (payload !== "0" && state.secondDigit == "0") {
          return {
            ...state,
            secondDigit: `${payload}`,
            viewresult: false
          }
        } else {
          return {
            ...state,
            secondDigit: `${state.secondDigit}${payload}`,
            viewresult: false
          }
        }
      } else {
        if (payload == "0" && state.firstDigit == "0") {
          return {
            ...state,
            firstDigit: "0",
            viewresult: false
          }
        } else if (state.firstDigit.includes(".")) {
          if (payload !== ".") {
            return {
              ...state,
              firstDigit: `${state.firstDigit}${payload}`,
              viewresult: false
            }
          }
        } else if (payload !== "0" && state.firstDigit == "0") {
          return {
            ...state,
            firstDigit: `${payload}`,
            viewresult: false
          }
        } else {
          return {
            ...state,
            firstDigit: `${state.firstDigit}${payload}`,
            viewresult: false
          }
        }
      }

    case ACTIONS.CHOOSE_OPERATION:

      // if we type new value after the result
      if (state.result !== "" && state.firstDigit !== "") {
        return {
          ...state,
          result: "",
          operator: payload,
        }
      }

      // to further do operations on the result value
      else if (state.result !== "") {
        return {
          ...state,
          firstDigit: state.result,
          operator: payload,
        }
        // to just change the operator
      } else if (state.firstDigit !== "") {
        return {
          ...state,
          operator: payload,
          result: "",
        }
      }


    case ACTIONS.CLEAR:
      return {
        ...state,
        firstDigit: "",
        operator: "",
        secondDigit: "",
        result: ""
      }



    case ACTIONS.EVALUATE:
      if (
        state.firstDigit !== "" &&
        state.operator !== "" &&
        state.secondDigit !== ""
      ) {
        let val1 = parseFloat(state.firstDigit);
        let val2 = parseFloat(state.secondDigit);

        // console.log(val1,val2)
        let computation = "";
        switch (state.operator) {
          case "+":
            computation = val1 + val2;
            break;
          case "-":
            computation = val1 - val2;
            break;
          case "*":
            computation = val1 * val2;
            break;
          case "/":
            computation = val1 / val2;
            break;
        }


        return {
          ...state,
          firstDigit: "",
          operator: "",
          secondDigit: "",
          result: computation.toString(),
          viewresult: true

        }

      }

    case ACTIONS.DELETE_DIGIT:

      if (state.secondDigit !== "" && state.firstDigit !== "") {
        return {
          ...state,
          secondDigit: state.secondDigit.slice(0, -1),
        }
      } else if (state.operator !== "") {
        return {
          ...state,
          operator: "",
        }
      } else if (state.firstDigit !== "") {
        return {
          ...state,
          firstDigit: state.firstDigit.slice(0, -1),
        }
      } else {
        return {
          ...state,
          result: "",
        }
      }

  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, {
    firstDigit: "",
    operator: "",
    secondDigit: "",
    result: "",
    viewresult: false
  })

  let initialstate = {
    background : { backgroundColor: " hsl(222, 26%, 31%)" },
    keypadBackground : { backgroundColor: " hsl(223, 31%, 20%)" },
    slideText : { color: "hsl(0, 0%, 100%)" },
    screenBackground : { backgroundColor: "hsl(224, 36%, 15%)" },
    keyColor : { backgroundColor: "hsl(30, 25%, 89%)", color: "hsl(221, 14%, 31%)", borderBottom: "4px solid hsl(28, 16%, 65%)" },
    spelbtn : { backgroundColor: "hsl(225, 21%, 49%)", color: "white", borderBottom: "4px solid hsl(224, 28%, 35%)" },
    equalbtn : { backgroundColor: "hsl(6, 63%, 50%)", borderBottom: "4px solid hsl(6, 70%, 34%)" },
    slide : { backgroundColor: " hsl(223, 31%, 20%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }

  }

  const [style, setstyle] = useState(initialstate)
  const [slider, setSlider] = useState(1);

  


  function setSliderVal(val) {
    setSlider(() => val);
  }

  useEffect(() => {

    if (slider == 1) {
      setstyle(initialstate)
    }
    
  
    else if (slider == 2) {

      setstyle({
        background : { backgroundColor: "hsl(0, 0%, 90%)" },
        keypadBackground : { backgroundColor: " hsl(0, 5%, 81%)" },
        slideText : { color: "hsl(0, 100%, 0%)" },
        screenBackground : { backgroundColor: " hsl(0, 0%, 93%)" },
        keyColor : { backgroundColor: " hsl(45, 7%, 89%)", color: "hsl(60, 10%, 19%)", borderBottom: "4px solid hsl(35, 11%, 61%)" },
        spelbtn : { backgroundColor: "hsl(185, 42%, 37%)", color: "white", borderBottom: "4px solid hsl(185, 58%, 25%)" },
        equalbtn : { backgroundColor: "hsl(25, 98%, 40%)", borderBottom: "4px solid hsl(25, 99%, 27%)" },
        slide : { backgroundColor: "hsl(0, 0%, 93%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }
      })
    }

    else{
      setstyle({
        background : { backgroundColor: "hsl(268, 75%, 9%)" },
        keypadBackground : { backgroundColor: " hsl(268, 71%, 12%)" },
        slideText : { color: "hsl(52, 100%, 62%)" },
        screenBackground : { backgroundColor: "hsl(268, 71%, 12%)" },
        keyColor : { backgroundColor: "hsl(268, 47%, 21%)", color: "hsl(52, 100%, 62%)", borderBottom: "4px solid hsl(290, 70%, 36%)" },
        spelbtn : { backgroundColor: "hsl(281, 89%, 26%)", color: "white", borderBottom: "4px solid hsl(290, 70%, 36%)" },
        equalbtn : { backgroundColor: "hsl(176, 100%, 44%)", borderBottom: "4px solid hsl(177, 92%, 70%)" },
        slide : { backgroundColor: "hsl(268, 71%, 12%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }

      })
    }
  }, [slider])
  

  // let background = {}
  // let keypadBackground = {}
  // let slideText = {}
  // let screenBackground = {}
  // let keyColor = {}
  // let spelbtn = {}
  // let equalbtn = {}
  // let slide = {}


  // if (slider == 1) {
  //   background = { backgroundColor: " hsl(222, 26%, 31%)" };
  //   keypadBackground = { backgroundColor: " hsl(223, 31%, 20%)" };
  //   slideText = { color: "hsl(0, 0%, 100%)" }
  //   screenBackground = { backgroundColor: "hsl(224, 36%, 15%)" };
  //   keyColor = { backgroundColor: "hsl(30, 25%, 89%)", color: "hsl(221, 14%, 31%)", borderBottom: "4px solid hsl(28, 16%, 65%)" }
  //   spelbtn = { backgroundColor: "hsl(225, 21%, 49%)", color: "white", borderBottom: "4px solid hsl(224, 28%, 35%)" }
  //   equalbtn = { backgroundColor: "hsl(6, 63%, 50%)", borderBottom: "4px solid hsl(6, 70%, 34%)" }
  //   slide = { backgroundColor: " hsl(223, 31%, 20%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }

  // } else if (slider == 2) {
  //   background = { backgroundColor: "hsl(0, 0%, 90%)" }
  //   keypadBackground = { backgroundColor: " hsl(0, 5%, 81%)" };
  //   slideText = { color: "hsl(0, 100%, 0%)" }
  //   screenBackground = { backgroundColor: " hsl(0, 0%, 93%)" };
  //   keyColor = { backgroundColor: " hsl(45, 7%, 89%)", color: "hsl(60, 10%, 19%)", borderBottom: "4px solid hsl(35, 11%, 61%)" }
  //   spelbtn = { backgroundColor: "hsl(185, 42%, 37%)", color: "white", borderBottom: "4px solid hsl(185, 58%, 25%)" }
  //   equalbtn = { backgroundColor: "hsl(25, 98%, 40%)", borderBottom: "4px solid hsl(25, 99%, 27%)" }
  //   slide = { backgroundColor: "hsl(0, 0%, 93%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }
  // } else {
  //   background = { backgroundColor: "hsl(268, 75%, 9%)" }
  //   keypadBackground = { backgroundColor: " hsl(268, 71%, 12%)" };
  //   slideText = { color: "hsl(52, 100%, 62%)" }
  //   screenBackground = { backgroundColor: "hsl(268, 71%, 12%)" };
  //   keyColor = { backgroundColor: "hsl(268, 47%, 21%)", color: "hsl(52, 100%, 62%)", borderBottom: "4px solid hsl(290, 70%, 36%)" }
  //   spelbtn = { backgroundColor: "hsl(281, 89%, 26%)", color: "white", borderBottom: "4px solid hsl(290, 70%, 36%)" }
  //   equalbtn = { backgroundColor: "hsl(176, 100%, 44%)", borderBottom: "4px solid hsl(177, 92%, 70%)" }
  //   slide = { backgroundColor: "hsl(268, 71%, 12%)", WebkitSliderThumb: 'blur(10px) saturate(2)' }

  // }

  return (
    <>
      <div className="calc-body" style={style.background}>
        <ThemeSlider slider={slider} setSliderVal={setSliderVal} style={style} />
        <Display  style={style} state={state} />
        <Keypad
          dispatch={dispatch}
          style={style}
        />
      </div>
    </>
  );
}

export default App;
