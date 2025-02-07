import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./ProgressBar.css";

const ProgressBar = () => {
  const { tasks } = useContext(TaskContext);
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{completedTasks} / {tasks.length} tasks completed</p>
    </div>
  );
};

export default ProgressBar;
