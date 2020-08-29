import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';
import TaskList from './stories/TaskList';
import Task from './stories/Task';

function App() {
  return (
    <>
      <TaskList tasks={[]} />
      <div>
        <input type="text" />
        <button>add task</button>
      </div>
    </>
  );
}

export default App;
