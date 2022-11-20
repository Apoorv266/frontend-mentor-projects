import React from "react";
import "../Styles/ThemeSlider1.css";

const ThemeSlider = ({ slider, setSliderVal , style}) => {



  return (
    <>
    <div className="mainslider">

      <div className="themeslider">
        <h1 style={style.slideText}>calc</h1>
        <div className="theme-slider">
          <h4 style={style.slideText}>THEME</h4>
        </div>
      </div>
      <div className="slider-bar">
        <div className="nums" style={style.slideText}>
          <p>1</p> <p>2</p> <p>3</p>
        </div>
        <form>
          <input
            type="range"
            min={1}
            max={3}
            className="slider"
            id="myRange"
            value={slider}
              style={style.slide}
            onChange={(e) => setSliderVal(e.target.value)}
          />
        </form>

      </div>
      </div>
    </>
  );
};

export default ThemeSlider;
