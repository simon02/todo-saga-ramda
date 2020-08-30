import React from 'react';
import * as R from 'ramda';
import Task from './Task';

const taskCompleted = R.where({ state: R.equals('TASK_COMPLETED')});
const completedTasks = R.filter(taskCompleted);
const uncompletedTasks = R.reject(taskCompleted);
const sortByCompleteBy = R.sortBy(R.prop('completeBy'));

const taskClassName = (index, length) => index < length - 1 ? 'border-b border-gray-300' : '';

export default function TaskList({ tasks, onToggleTask }) {
  const events = {
    onToggleTask,
  };
  
  const completed = completedTasks(tasks);
  const uncompleted = sortByCompleteBy(uncompletedTasks(tasks));

  // const toggleTask = id => {
  //   console.log('task list toggle triggered');
  //   onToggleTask(id);
  // };

  if (!completed.length && !uncompleted.length) {
    return (
      <h4>Much empty</h4>
    )
  }

  const renderTasks = (tasks) => (
    <>
      {tasks.map((task, index) => (
        <Task key={task.id} className={taskClassName(index, tasks.length)} task={task} {...events} />
      ))}
    </>
  )

  return (
    <>
      {renderTasks(uncompleted)}
      {completed.length ? <h4 className="px-4 py-1 bg-gray-400 text-white uppercase text-xs font-bold">completed</h4> : ''}
      {renderTasks(completed)}
    </>
  );
}
