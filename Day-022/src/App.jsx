import KanbanBoard from './components/KanbanBoard';
import { KanbanProvider } from './context/KanbanProvider';
import './App.css';

function App() {
  return (
    <KanbanProvider>
      <div className='app-container'>
        <h1>📌 Kanban Board</h1>
        <KanbanBoard />
      </div>
    </KanbanProvider>
  );
}

export default App;
