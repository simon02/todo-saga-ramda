import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskForm.css';

const INPUT =
  'outline-none border border-gray-500 focus:border-gray-600 rounded py-2 px-3 mb-2';
const EMPTY_TASK = {
  title: '',
  category: '',
  tags: [],
  state: 'TASK_INBOX',
  completeBy: undefined,
};

export default function TaskForm({ task, onSubmitTask }) {
  const [newTask, setTask] = useState(task || { ...EMPTY_TASK });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...newTask, [name]: value });
  };

  const saveTask = (e) => {
    e.preventDefault();
    const tags =
      newTask.tags instanceof Array
        ? newTask.tags
        : newTask.tags?.split?.(/, */) || [];

    onSubmitTask({
      ...newTask,
      state: 'TASK_INBOX',
      tags,
    });

    setTask({ ...EMPTY_TASK });
  };

  return (
    <form className="flex flex-col default" onSubmit={saveTask}>
      <input
        className={INPUT}
        type="text"
        name="title"
        value={newTask.title}
        placeholder="Title"
        onChange={handleInputChange}
      />
      <DatePicker
        placeholderText="MM/DD/YYYY"
        selected={newTask.completeBy}
        onChange={(date) =>
          handleInputChange({ target: { name: 'completeBy', value: date } })
        }
      />
      <input
        className={INPUT}
        type="text"
        name="category"
        value={newTask.category}
        placeholder="Category"
        onChange={handleInputChange}
      />
      <input
        className={INPUT}
        type="text"
        name="tags"
        value={newTask.tags}
        placeholder="Tags, comma separated"
        onChange={handleInputChange}
      />
      <button className="uppercase font-semibold tracking-wider outline-none bg-blue-400 border-2 border-blue-500 rounded p-2 text-white">
        Save
      </button>
    </form>
  );
}
