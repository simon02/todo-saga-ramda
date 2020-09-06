import React, { useState, useEffect, useCallback } from 'react';
import ContentEditable from 'react-contenteditable';

import './AddTaskCondensed.css';
import {
  extractTaskInfo,
  parseDom,
  replaceCategoriesAndTags,
} from '../utils/taskExtraction';

const INPUT =
  'outline-none border border-gray-500 focus:border-gray-600 rounded py-2 px-3 mb-2';
const REPLACE_CATEGORIES_REGEXP = '<span style="color: blue">#$1</span>';
const REPLACE_TAGS_REGEXP = '<span style="color: gray">~$1</span>';

export default function AddTaskCondensed({ onAddTask }) {
  const [task, setTask] = useState('');

  const onKeyPress = useCallback(
    (event) => {
      if (event.which === 13) {
        event.preventDefault();

        if (!task) {
          return;
        }

        const extractedTask = extractTaskInfo(parseDom(task));
        onAddTask(extractedTask);

        setTask('');
      }
    },
    [task, onAddTask],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  });

  const onHandleChange = ({ target: { value } }) => {
    setTask(
      replaceCategoriesAndTags(
        REPLACE_CATEGORIES_REGEXP,
        REPLACE_TAGS_REGEXP,
        parseDom(value),
      ),
    );
  };

  return (
    <div className="relative">
      <ContentEditable
        html={task}
        onChange={onHandleChange}
        onKeyPress={onKeyPress}
        placeholder="Enter a new task, use # to add a category, ~ for tags and press enter to save"
        className={`${INPUT} m-5`}
      />
    </div>
  );
}
