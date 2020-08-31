import React, { useState } from 'react';
import * as R from 'ramda';

import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import TaskList from './stories/TaskList';
import Task from './stories/Task';
import TaskForm from './stories/TaskForm';
import MenuList from './stories/MenuList';

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
  const [menuItems, setMenuItems] = useState([
    { title: 'All' },
    { title: 'Overdue' },
    { title: 'Uncategorized' },
  ])

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

  const EmptyTasks = () => (
    <span className="flex m-5 text-gray-500 text-2xl italic font-light">
      No tasks found.
    </span>
  );

  return (
    <div className="flex flex-row h-screen">
      <div className="w-48 bg-gray-600">
        <MenuList menuItems={menuItems} onAddNewItem={true} />
      </div>
      <div className="flex-1">
        <TaskList tasks={tasks} onToggleTask={(id) => toggleTask(id)} empty={<EmptyTasks />} />
        <div className="m-5">
          <h3 className="font-semibold text-gray-700 text-lg mb-2">Add a new task:</h3>
          <TaskForm onSubmitTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
