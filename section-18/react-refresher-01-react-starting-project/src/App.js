import React, { useState } from "react";

import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevState) => [...prevState, newGoal]);
  };

  const onGoalDelete = (text) => {
    setCourseGoals(courseGoals.filter((item) => item.text !== text));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} onDelete={onGoalDelete} />
    </div>
  );
};

// class components example =>
// class App extends React.Component {
//   render() {
//     return <h1>A React App!</h1>;
//   }
// }

export default App;
