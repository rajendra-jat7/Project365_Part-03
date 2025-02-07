import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ProgressBar from "./components/ProgressBar";
import { TaskProvider } from "./context/TaskProvider";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1>🎯 Focus On Today</h1>
        <ProgressBar />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
