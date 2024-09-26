import React from "react";

import "./GoalList.css";

const GoalList = ({ goals, onDelete }) => {
  const onGoalClick = (e) => {
    onDelete(e.target.innerText);
  };
  return (
    <ul className="goal-list">
      {goals.map((item) => (
        <li style={{ cursor: "pointer" }} key={item.id} onClick={onGoalClick}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
