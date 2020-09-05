import React from 'react';
import { connect } from 'react-redux';
import TaskList from '../TaskList';
import { toggleTask } from '../../features/tasks/tasksSlice';
import { getVisibleTasks } from '../../features/tasks/selectors';

const TaskListContainer = (props) => {
  return <TaskList {...props} />;
};

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state),
});

export default connect(mapStateToProps, {
  onToggleTask: toggleTask,
})(TaskListContainer);
