import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskForm.css";

const TaskForm = () => {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default TaskForm;
