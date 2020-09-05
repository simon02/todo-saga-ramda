import React from 'react';

import { connect } from 'react-redux';

import TaskList from '../TaskList';
import { toggleTask } from '../../actions';

const TaskListContainer = (props) => {
  return <TaskList {...props} />;
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, {
  onToggleTask: toggleTask,
})(TaskListContainer);
