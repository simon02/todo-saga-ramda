import React, { useState, useEffect, useCallback } from 'react';
import ContentEditable from 'react-contenteditable';

import './AddTaskCondensed.css';

const CATEGORIES_REGEXP = new RegExp(/#(\S+)/, 'g');
const TAGS_REGEXP = new RegExp(/~(\S+)/, 'g');
const INPUT = "outline-none border border-gray-500 focus:border-gray-600 rounded py-2 px-3 mb-2"

export default function AddTaskCondensed({ onAddTask }) {
  const [task, setTask] = useState('');

  const onKeyPress = useCallback((event) => {
    if (event.which === 13) {
      event.preventDefault();
      const parsedTask = new DOMParser().parseFromString(task, 'text/html').body.textContent;
      const t = {
        title: parsedTask.replace(CATEGORIES_REGEXP, '').replace(TAGS_REGEXP, '').trim(),
        category: parsedTask.match(CATEGORIES_REGEXP)?.[0].replace(CATEGORIES_REGEXP, '$1'),
        tags: parsedTask.match(TAGS_REGEXP)?.map(tag => tag.replace(TAGS_REGEXP, '$1')) || [],
      };
      onAddTask(t);
      return;
    }
  }, [task]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress, false);

    return () => {
      document.removeEventListener('keydown', onKeyPress, false);
    }
  })

  const parseCategoriesAndTags = (text) => {
    return text
      .replace(CATEGORIES_REGEXP, '<span style="color: blue">#$1</span>')
      .replace(TAGS_REGEXP, '<span style="color: gray">~$1</span>');
  }

  const onHandleChange = ({ target: { value }}) => {
    const parsedValue = new DOMParser().parseFromString(value, 'text/html').body.textContent;
    setTask(parseCategoriesAndTags(parsedValue));
  };

  const onKeyUp = ({ which }) => {

  }

  const addTask = () => {

  }

  return (
    <div className="relative">
      <ContentEditable 
        html={task} onChange={onHandleChange} onKeyUp={onKeyUp} 
        placeholder="Enter a new task, use # to add a category, ~ for tags and press enter to save"
        className={`${INPUT} m-5`} />
    </div>
  );
}