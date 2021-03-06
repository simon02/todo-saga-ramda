import React from 'react';
import './App.css';
import AddTask from './stories/containers/AddTask';
import MenuListContainer from './stories/containers/MenuListContainer';
import TaskListContainer from './stories/containers/TaskList';
import './tailwind.output.css';

function App() {
  const EmptyTasks = () => (
    <span className="flex m-5 text-blue-600 text-2xl italic font-light">
      No tasks found.
    </span>
  );

  return (
    <div className="flex flex-row h-screen">
      <div className="w-48 bg-gray-600">
        <MenuListContainer />
      </div>
      <div className="flex-1">
        <TaskListContainer empty={<EmptyTasks />} />
        <AddTask />
        <div className="m-5">
          {/* <h3 className="font-thin text-gray-500 text-lg mb-2">
            Add a new task:
          </h3> */}
          {/* <TaskForm onSubmitTask={addTask} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
