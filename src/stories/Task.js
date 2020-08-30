import React from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import './Task.css';
import DateText from './DateText';
import moment from 'moment';

const TASK_TITLE_BASE = "outline-none flex-1 bg-transparent w-full p-0";
const TASK_TITLE = `${TASK_TITLE_BASE} text-gray-900`
const TASK_COMPLETED_TITLE = `${TASK_TITLE_BASE} line-through text-gray-500`;
const DATE_BASE = 'text-xs';
const DATE = `${DATE_BASE} text-gray-600 font-hairline`;
const DATE_OVERTIME = `${DATE_BASE} text-red-700 font-semibold`;

export default function Task({ task: { id, title, state, category, tags = [], completeBy }, onToggleTask, className }) {
  const completed = state === 'TASK_COMPLETED';
  const overtime = moment().isAfter(completeBy);

  const categoryElement = category ? (
    <>
      <span>{category}</span>
      {tags?.length ? <BsDot className="text-gray-500" /> : ''}
    </>
  ) : '';
  const dateElement = !completeBy ? '' : (
    <span className={overtime && !completed ? DATE_OVERTIME : DATE}>
      <DateText date={completeBy} />
    </span>
  );

  return (
    <div className={`bg-gray-100 p-2 flex items-center ${className}`}>
      <div className="">
        <input className="task__check hidden" type="checkbox" defaultChecked={completed} disabled={true} />
        <span className="p-2 flex justify-center text-blue-500 text-xl" onClick={() => onToggleTask(id)}>
          {completed ? <FiCheckSquare /> : <FiSquare />}
        </span>
      </div>
      <div className="flex-1 pr-4">
        <input className={completed ? TASK_COMPLETED_TITLE : TASK_TITLE} type="text" value={title} readOnly={true} />
        <div className="flex items-center text-sm text-gray-600">
          {categoryElement}
          {tags.map(tag => (
            <span key={tag} className="mr-1 italic">#{tag}</span>
          ))}
        </div>
      </div>
      {dateElement}
    </div>
  );
}