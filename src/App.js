import React, { useState } from 'react';
import * as R from 'ramda';

import './App.css';
import './tailwind.output.css';
import TaskListContainer from './stories/containers/TaskList';
import TaskForm from './stories/TaskForm';
import MenuList from './stories/MenuList';
import AddTask from './stories/containers/AddTask';

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
    <span className="flex m-5 text-blue-600 text-2xl italic font-light">
      No tasks found.
    </span>
  );

  return (
    <div className="flex flex-row h-screen">
      <div className="w-48 bg-gray-600">
        <MenuList menuItems={menuItems} onAddNewItem={true} />
      </div>
      <div className="flex-1">
        <TaskListContainer empty={<EmptyTasks />} />
        <AddTask />
        <div className="m-5">
          <h3 className="font-thin text-gray-500 text-lg mb-2">Add a new task:</h3>
          <TaskForm onSubmitTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
