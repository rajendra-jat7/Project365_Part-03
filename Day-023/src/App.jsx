import PollProvider from "./context/PollProvider"; // ✅ Updated import
import Poll from "./components/Poll";
import "./App.css";

function App() {
  return (
    <PollProvider>
      <div className="app-container">
        <h1>🗳 Poll App</h1>
        <Poll />
      </div>
    </PollProvider>
  );
}

export default App;
