import React from 'react';

import { connect } from 'react-redux';

import TaskList from '../TaskList';
import { toggleTask } from '../../actions';

const TaskListContainer = (props) => {
  console.log(props)

  return (
    <TaskList {...props} />
    // <span>test</span>
  )
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, {
  onToggleTask: toggleTask,
})(TaskListContainer);