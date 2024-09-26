import "./PageOne.css";
import fitWomen from "../../assets/women_workout.avif";
import { useState } from "react";

const PageOne = () => {
  const [bmi, setBmi] = useState();

  return (
    <div className="project-one-container">
      <img src={fitWomen} alt="women with sportsgear" />
      <div className="overlay-container">
        <div className="title">
          <p>Start your journey now</p>
          <h1>BMI Calculator</h1>
        </div>
        <div className="input-container">
          <label htmlFor="input1" className="input-label">
            <p className="input-text">Text input</p>
            <input id="input1" name="myInput" className="input-field" />
          </label>
          <label htmlFor="input2" className="input-label">
            <p className="input-text">Text input</p>
            <input id="input2" name="myInput" className="input-field" />
          </label>
          <button className="calculate-btn" onClick={() => setBmi(22)}>
            Calculate
          </button>
          <div className="bmi-display">
            <span className="bmi-text">Your BMI</span>
            <h2 className="bmi-value">{bmi}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
