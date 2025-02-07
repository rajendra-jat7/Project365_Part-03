import { useContext } from 'react';
import { KanbanContext } from '../context/KanbanContext';
import Column from './Column';
import { DragDropContext } from '@hello-pangea/dnd'; // ✅ Updated import
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { tasks, setTasks } = useContext(KanbanContext);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const column = [...tasks[source.droppableId]];
      const [movedTask] = column.splice(source.index, 1);
      column.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({ ...prev, [source.droppableId]: column }));
    } else {
      const sourceColumn = [...tasks[source.droppableId]];
      const destColumn = [...tasks[destination.droppableId]];
      const [movedTask] = sourceColumn.splice(source.index, 1);
      destColumn.splice(destination.index, 0, movedTask);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destColumn,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='kanban-board'>
        {Object.keys(tasks).map((columnId) => (
          <Column key={columnId} columnId={columnId} tasks={tasks[columnId]} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
