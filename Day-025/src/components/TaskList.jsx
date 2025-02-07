import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskList.css";

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div className="task-container">
      {tasks.length === 0 ? <p>No tasks yet. Start your day! 🎯</p> : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
