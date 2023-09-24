import React, { useState } from "react";

function FormCom(props) {
  const [formInput, setFormInput] = useState({
    current_savings: 10000,
    yearly_contribution: 1000,
    expected_return: 7,
    duration: 10,
  });

  const userInput = (event) => {
    props.calculateHandler(formInput);
    event.preventDefault();
  };

  const resetHandler = () => {
    setFormInput({
      current_savings: 10000,
      yearly_contribution: 1000,
      expected_return: 7,
      duration: 10,
    });
  };

  const changeHandler = (input, value) => {
    setFormInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={userInput} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) => {
              changeHandler("current_savings", event.target.value);
            }}
            value={formInput["current_savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) => {
              changeHandler("yearly_contribution", event.target.value);
            }}
            value={formInput["yearly_contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) => {
              changeHandler("expected_return", event.target.value);
            }}
            value={formInput["expected_return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => {
              changeHandler("duration", event.target.value);
            }}
            value={formInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default FormCom;
