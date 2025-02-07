import { Droppable } from '@hello-pangea/dnd';
import Task from './Task';
import './Column.css';
import PropTypes from 'prop-types';

const Column = ({ columnId, tasks }) => {
  const columnTitles = {
    todo: '📝 To Do',
    inProgress: '🚀 In Progress',
    done: '✅ Done',
  };

  return (
    <div className='column'>
      <h2>{columnTitles[columnId]}</h2>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='task-list'
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

Column.propTypes = {
  columnId: PropTypes.node.isRequired,
  tasks: PropTypes.node.isRequired,
};

export default Column;
