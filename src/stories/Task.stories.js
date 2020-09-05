import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  argTypes: {
    onToggleTask: { action: 'toggle' },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    category: 'some category',
    tags: ['tag1', 'tag2', 'tag3'],
    completeBy: new Date(Date.now() + 3600000 * 24 * 3),
  },
};

export const Completed = Template.bind({});
Completed.args = {
  task: {
    ...Default.args.task,
    completed: true,
    completeBy: new Date(Date.now() - 3600000 * 24 * 3),
  },
};

export const Overtime = Template.bind({});
Overtime.args = {
  task: {
    ...Default.args.task,
    completeBy: new Date(Date.now() - 3600000 * 24 * 3),
  },
};
