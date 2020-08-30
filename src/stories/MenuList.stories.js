import React from 'react';

import MenuList from './MenuList';

export default {
  component: MenuList,
  title: 'MenuList',
  // argTypes: {
  //   onToggleTask: { action: 'toggle'}
  // }
};

const Template = args => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { title: 'Show all', count: 15 },
    { title: 'Overdue', count: 2 },
    { title: 'Completed', count: 0 },
  ]
}

export const WithAdding = Template.bind({});
WithAdding.args = {
  menuItems: [
    { title: 'Show all', count: 15 },
  ],
  onAddNewItem: true,
}