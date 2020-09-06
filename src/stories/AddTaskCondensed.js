import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import {
  extractTaskInfo,
  parseDom,
  replaceCategoriesTagsDates,
} from '../utils/taskExtraction';
import './AddTaskCondensed.css';

const INPUT =
  'outline-none border border-gray-500 focus:border-gray-600 rounded py-2 px-3 mb-2';
const REPLACE_CATEGORIES_REGEXP = '<span style="color: blue">#$1</span>';
const REPLACE_TAGS_REGEXP = '<span style="color: gray">~$1</span>';
const REPLACE_DATE_REGEXP = '<span style="color: green">@$1</span>';

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
        const { completeBy } = extractedTask;
        onAddTask({
          ...extractedTask,
          completeBy: completeBy
            ? moment(completeBy, 'DD-MM-YYYY').valueOf()
            : undefined,
        });

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
    console.log(
      replaceCategoriesTagsDates(
        REPLACE_CATEGORIES_REGEXP,
        REPLACE_TAGS_REGEXP,
        REPLACE_DATE_REGEXP,
        parseDom(value),
      ),
    );
    setTask(
      replaceCategoriesTagsDates(
        REPLACE_CATEGORIES_REGEXP,
        REPLACE_TAGS_REGEXP,
        REPLACE_DATE_REGEXP,
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
        placeholder="Enter a new task (#category, ~tags, @date)"
        className={`${INPUT} m-5`}
      />
    </div>
  );
}
