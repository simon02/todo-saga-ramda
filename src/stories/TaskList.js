import React from 'react';
import * as R from 'ramda';
import Task from './Task';

const taskCompleted = R.where({ state: R.equals('TASK_COMPLETED')});
const completedTasks = R.filter(taskCompleted);
const uncompletedTasks = R.reject(taskCompleted);
const sortByCompleteBy = R.sortBy(R.prop('completeBy'));

const taskClassName = (index, length) => index < length - 1 ? 'border-b border-gray-300' : '';

export default function TaskList({ tasks }) {

  const completed = completedTasks(tasks);
  const uncompleted = sortByCompleteBy(uncompletedTasks(tasks));

  if (!completed.length && !uncompleted.length) {
    return (
      <h4>Much empty</h4>
    )
  }

  return (
    <>
      {uncompleted.map((task, index) => (
        <Task key={task.id} className={taskClassName(index, uncompleted.length)} task={task} />
      ))}
      {completed.length ? <h4 className="px-4 py-1 bg-gray-400 text-white uppercase text-xs font-bold">completed</h4> : ''}
      {completed.map((task, index) => (
        <Task key={task.id} className={taskClassName(index, completed.length)} task={task} />
      ))}
    </>
  );
}
