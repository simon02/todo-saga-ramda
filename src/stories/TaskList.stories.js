import React from 'react';

import TaskList from './TaskList';

export default {
  component: TaskList,
  title: 'TaskList',
  argTypes: {
    onToggleTask: { action: 'toggle' },
  },
};

const Template = (args) => <TaskList {...args} />;

const dateInDays = (days) => new Date(Date.now() + 3600000 * 24 * days);
const createTask = ({
  id = 1,
  title,
  completed = false,
  category,
  tags = [],
  completeBy = dateInDays(7),
}) => ({
  id,
  title: title || `Task #${id}`,
  completed,
  category,
  tags,
  completeBy,
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    createTask({ id: 1, tags: ['tag1'] }),
    createTask({ id: 2, category: 'work', tags: ['tag1', 'tag2'] }),
    createTask({ id: 3 }),
  ],
  empty: <span>No tasks found.</span>,
};

export const WithCompletedItems = Template.bind({});
WithCompletedItems.args = {
  tasks: [
    createTask({ id: 1 }),
    createTask({ id: 2 }),
    createTask({ id: 3, completed: true }),
    createTask({ id: 4, completed: true }),
  ],
  empty: <span>No tasks found.</span>,
};

export const SortedByCompletionDate = Template.bind({});
SortedByCompletionDate.args = {
  tasks: [
    createTask({ id: 1, tags: ['tag1'] }),
    createTask({ id: 2, category: 'work', tags: ['tag1', 'tag2'] }),
    createTask({ id: 3, completeBy: dateInDays(2) }),
    createTask({ id: 4, completeBy: dateInDays(200) }),
  ],
  empty: <span>No tasks found.</span>,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  empty: <span>No tasks found.</span>,
};
