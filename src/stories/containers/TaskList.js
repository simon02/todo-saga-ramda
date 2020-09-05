import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../TaskList';
import { toggleTask } from '../../features/tasks/tasksSlice';

const TaskListContainer = (props) => {
  return <TaskList {...props} />;
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, {
  onToggleTask: toggleTask,
})(TaskListContainer);
