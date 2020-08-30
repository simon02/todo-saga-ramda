import React, { useState } from 'react';
import * as R from 'ramda';

import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import TaskList from './stories/TaskList';
import Task from './stories/Task';
import TaskForm from './stories/TaskForm';

const taskExists = (id) => R.any(R.propEq('id', id))
const findTaskById = (id, ...args) => {
  const findById = R.find(R.propEq('id', id));

  if (args.length) {
    return findById(...args);
  }

  return findById;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: tasks.length,
      }
    ]);
  }

  const toggleTask = (taskId) => {
    const task = R.find(R.propEq('id', taskId))(tasks);

    setTasks([
      ...R.reject(R.propEq('id', taskId))(tasks),
      {
        ...task,
        state: task.state === 'TASK_COMPLETED' ? 'TASK_INBOX' : 'TASK_COMPLETED',
      }
    ])
  }

  return (
    <>
      <TaskList tasks={tasks} onToggleTask={(id) => toggleTask(id)} />
      <h3>Add a new task:</h3>
      <TaskForm onSubmitTask={addTask} />
    </>
  );
}

export default App;
