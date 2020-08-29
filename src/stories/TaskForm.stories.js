import React from 'react';

import TaskForm from './TaskForm';

export default {
  component: TaskForm,
  title: 'TaskForm',
};

const Template = args => <TaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {},
}

export const WithExistingTask = Template.bind({});
WithExistingTask.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    category: 'some category',
    tags: ['tag1', 'tag2', 'tag3'],
    completeBy: new Date(Date.now() + 3600000*24*3),
  },
}