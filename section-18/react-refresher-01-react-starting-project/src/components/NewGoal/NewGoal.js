import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [inputValue, setInputValue] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();

    props.onAddGoal({
      id: Math.random().toString(),
      text: inputValue,
    });
    setInputValue("");
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
