import React from 'react';
import * as R from 'ramda';
import Task from './Task';

const taskCompleted = R.where({ completed: R.equals(true) });
const completedTasks = R.filter(taskCompleted);
const uncompletedTasks = R.reject(taskCompleted);
const sortByCompleteBy = R.sortBy(R.prop('completeBy'));

const taskClassName = (index, length) =>
  index < length - 1 ? 'border-b border-gray-300' : '';

export default function TaskList({
  tasks = [],
  empty,
  onToggleTask,
  filterCategory,
}) {
  const events = {
    onToggleTask,
    filterCategory,
  };

  const completed = completedTasks(tasks);
  const uncompleted = sortByCompleteBy(uncompletedTasks(tasks));

  if (!tasks.length) {
    return <div>{empty}</div>;
  }

  const RenderTasks = ({ tasks }) => (
    <>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          className={taskClassName(index, tasks.length)}
          task={task}
          {...events}
        />
      ))}
    </>
  );

  return (
    <>
      <RenderTasks tasks={uncompleted} />
      {completed.length ? (
        <h4 className="px-4 py-1 bg-gray-400 text-white uppercase text-xs font-bold">
          completed
        </h4>
      ) : (
        ''
      )}
      <RenderTasks tasks={completed} />
    </>
  );
}
