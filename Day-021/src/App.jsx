import { ThemeProvider } from "./context/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>🌗 Dark/Light Mode App</h1>
        <ThemeToggle />
        <p>Click the button to toggle between dark and light mode.</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
