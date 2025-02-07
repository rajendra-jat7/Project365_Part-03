import { useState } from 'react';
import PropTypes from 'prop-types';
import { KanbanContext } from './KanbanContext';

export const KanbanProvider = ({ children }) => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: '1', content: 'Complete React Project' },
      { id: '2', content: 'Review Code' },
    ],
    inProgress: [{ id: '3', content: 'Update Documentation' }],
    done: [{ id: '4', content: 'Fix Bugs' }],
  });

  return (
    <KanbanContext.Provider value={{ tasks, setTasks }}>
      {children}
    </KanbanContext.Provider>
  );
};

// ✅ Add PropTypes validation
KanbanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default KanbanContext;
