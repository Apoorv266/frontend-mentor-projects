import React, { useState } from "react";
import Display from "./Components/Display";
import Keypad from "./Components/Keypad";
import ThemeSlider from "./Components/ThemeSlider";
import "./Styles/Body.css";

function App() {
  const [firstDig, setfirstDig] = useState({
    firstDigit: "",
    operator: "",
    secondDigit: "",
    result: "",
  });
  const [slider, setSlider] = useState(1);
  const [disResult, setdisResult] = useState(false);

  const first = (e) => {
    setdisResult(false);

    if (firstDig.operator !== "") {
      if (e == "0" && firstDig.secondDigit == "0") {
        setfirstDig({
          ...firstDig,
          secondDigit: "0",
        });
      } else if (firstDig.secondDigit.includes(".")) {
        if (e !== ".") {
          setfirstDig({
            ...firstDig,
            secondDigit: `${firstDig.secondDigit}${e}`,
          });
        }
      } else if (e !== "0" && firstDig.secondDigit == "0") {
        setfirstDig({
          ...firstDig,
          secondDigit: `${e}`,
        });
      } else {
        setfirstDig({
          ...firstDig,
          secondDigit: `${firstDig.secondDigit}${e}`,
        });
      }
    } else {
      if (e == "0" && firstDig.firstDigit == "0") {
        setfirstDig({
          ...firstDig,
          firstDigit: "0",
        });
      } else if (firstDig.firstDigit.includes(".")) {
        if (e !== ".") {
          setfirstDig({
            ...firstDig,
            firstDigit: `${firstDig.firstDigit}${e}`,
          });
        }
      } else if (e !== "0" && firstDig.firstDigit == "0") {
        setfirstDig({
          ...firstDig,
          firstDigit: `${e}`,
        });
      } else {
        setfirstDig({
          ...firstDig,
          firstDigit: `${firstDig.firstDigit}${e}`,
        });
      }
    }
  };

  const operation = (e) => {
    setdisResult(false);

    // if we type new value after the result
    if (firstDig.result !== "" && firstDig.firstDigit !== "") {
      setfirstDig({
        ...firstDig,
        result: "",
        operator: e,
      });
    }

    // to further do operations on the result value
    else if (firstDig.result !== "") {
      setfirstDig({
        ...firstDig,
        firstDigit: firstDig.result,
        operator: e,
      });
      // to just change the operator
    } else if (firstDig.firstDigit !== "") {
      setfirstDig({
        ...firstDig,
        operator: e,
        result: "",
      });
    }
  };

  function clear() {
    setfirstDig({
      ...firstDig,
      firstDigit: "",
      operator: "",
      secondDigit: "",
      result: "",
    });
  }

  function evaluate() {
    if (
      firstDig.firstDigit !== "" &&
      firstDig.operator !== "" &&
      firstDig.secondDigit !== ""
    ) {
      let val1 = parseFloat(firstDig.firstDigit);
      let val2 = parseFloat(firstDig.secondDigit);
      let computation = "";
      switch (firstDig.operator) {
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

      setfirstDig({
        ...firstDig,
        firstDigit: "",
        operator: "",
        secondDigit: "",
        result: computation.toString(),
      });
      setdisResult(true);
    }
  }

  function del() {
    if (firstDig.secondDigit !== "" && firstDig.firstDigit !== "") {
      setfirstDig({
        ...firstDig,
        secondDigit: firstDig.secondDigit.slice(0, -1),
      });
    } else if (firstDig.operator !== "") {
      setfirstDig({
        ...firstDig,
        operator: "",
      });
    } else if (firstDig.firstDigit !== "") {
      setfirstDig({
        ...firstDig,
        firstDigit: firstDig.firstDigit.slice(0, -1),
      });
    } else {
      setfirstDig({
        ...firstDig,
        result: "",
      });
    }
  }


  function setSliderVal(val) {
    setSlider(() => val);
  }

  let background = {}
  let keypadBackground = {}
  let slideText = {}
  let screenBackground = {}
  let keyColor = {}
  let spelbtn = {}
  let equalbtn = {}
  let slide = {}


  if (slider == 1) {
    background = { backgroundColor: " hsl(222, 26%, 31%)" };
    keypadBackground = { backgroundColor: " hsl(223, 31%, 20%)" };
    slideText = {color: "hsl(0, 0%, 100%)" }
    screenBackground= { backgroundColor: "hsl(224, 36%, 15%)" };
    keyColor = {backgroundColor: "hsl(30, 25%, 89%)", color: "hsl(221, 14%, 31%)", borderBottom:"4px solid hsl(28, 16%, 65%)" }
    spelbtn ={backgroundColor:"hsl(225, 21%, 49%)", color: "white", borderBottom:"4px solid hsl(224, 28%, 35%)"}
    equalbtn = {backgroundColor:"hsl(6, 63%, 50%)" , borderBottom:"4px solid hsl(6, 70%, 34%)"}
    slide={backgroundColor: " hsl(223, 31%, 20%)", WebkitSliderThumb : 'blur(10px) saturate(2)'}
  
  } else if (slider == 2) {
    background = { backgroundColor: "hsl(0, 0%, 90%)" }
    keypadBackground = { backgroundColor: " hsl(0, 5%, 81%)" };
    slideText = {color: "hsl(0, 100%, 0%)" }
    screenBackground= { backgroundColor: " hsl(0, 0%, 93%)" };
    keyColor = {backgroundColor: " hsl(45, 7%, 89%)", color: "hsl(60, 10%, 19%)", borderBottom:"4px solid hsl(35, 11%, 61%)"}
    spelbtn ={backgroundColor: "hsl(185, 42%, 37%)" , color: "white", borderBottom:"4px solid hsl(185, 58%, 25%)"}
    equalbtn = {backgroundColor:"hsl(25, 98%, 40%)", borderBottom:"4px solid hsl(25, 99%, 27%)"}
    slide={backgroundColor: "hsl(0, 0%, 93%)", WebkitSliderThumb : 'blur(10px) saturate(2)'}
  } else {
      background = { backgroundColor: "hsl(268, 75%, 9%)" }
      keypadBackground = { backgroundColor: " hsl(268, 71%, 12%)" };
      slideText = {color: "hsl(52, 100%, 62%)" }
      screenBackground= { backgroundColor: "hsl(268, 71%, 12%)" };
      keyColor = {backgroundColor: "hsl(268, 47%, 21%)" , color: "hsl(52, 100%, 62%)" , borderBottom:"4px solid hsl(290, 70%, 36%)"}
      spelbtn ={backgroundColor: "hsl(281, 89%, 26%)" , color: "white", borderBottom:"4px solid hsl(290, 70%, 36%)"}
      equalbtn = {backgroundColor:"hsl(176, 100%, 44%)", borderBottom:"4px solid hsl(177, 92%, 70%)"}
      slide={backgroundColor: "hsl(268, 71%, 12%)", WebkitSliderThumb : 'blur(10px) saturate(2)'}
      
    }

    return (
      <>
        <div className="calc-body" style={background}>
          <ThemeSlider slider={slider} setSliderVal={setSliderVal} slideText={slideText} slide={slide}/>
          <Display firstDig={firstDig} disResult={disResult}  screenBackground={screenBackground}/>
          <Keypad
            first={first}
            operation={operation}
            clear={clear}
            evaluate={evaluate}
            del={del}
            keypadBackground={keypadBackground}
            keyColor = {keyColor}
            spelbtn={spelbtn}
            equalbtn={equalbtn}
          />
        </div>
      </>
    );
  }

  export default App;
