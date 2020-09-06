import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../features/tasks/tasksSlice';
import AddTaskCondensed from '../AddTaskCondensed';
import { add } from '../../features/menu/menuSlice';

const AddTask = ({ addTask }) => {
  return <AddTaskCondensed onAddTask={addTask} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      // dispatch(addTask(task));
      // if (task.category) {
      //   dispatch(add(task.category));
      // }
      dispatch({
        type: 'ADD_TASK_EXTENDED',
        task,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
