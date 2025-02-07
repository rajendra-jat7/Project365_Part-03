import { Droppable } from '@hello-pangea/dnd';
import './Task.css';
import PropTypes from 'prop-types';

const Task = ({ task, index }) => {
  return (
    <Droppable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='task'
        >
          {task.content}
        </div>
      )}
    </Droppable>
  );
};

Task.propTypes = {
  task: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};

export default Task;
