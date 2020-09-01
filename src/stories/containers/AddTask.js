import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
import AddTaskCondensed from '../AddTaskCondensed';

const AddTask = ({ addTask }) => {
  return (
    <AddTaskCondensed onAddTask={addTask} />
  )
}

export default connect(null, {
  addTask,
})(AddTask);
