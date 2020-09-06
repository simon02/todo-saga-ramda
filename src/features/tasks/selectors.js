import { createSelector } from 'reselect';
import moment from 'moment';
import {
  ALL_MENU_ITEM,
  OVERDUE_MENU_ITEM,
  UNCATEGORIZED_MENU_ITEM,
} from '../menu/menuSlice';

const getMenus = (state) => state.menu.items;
const getSelectedMenuItem = (state) => state.menu.selected;
const getTasks = (state) => state.tasks;

const filterVisibleTasks = (menuItem, tasks) => {
  switch (menuItem) {
    case ALL_MENU_ITEM:
      return tasks;
    case OVERDUE_MENU_ITEM:
      return tasks.filter(({ completeBy }) => moment().isAfter(completeBy));
    case UNCATEGORIZED_MENU_ITEM:
      return tasks.filter(({ category }) => !category);
    default:
      return tasks.filter(({ category }) => category === menuItem);
  }
};

export const getMenuWithTaskTotals = createSelector(
  [getMenus, getTasks],
  (menus, tasks) => {
    return menus.map((menu) => ({
      title: menu,
      count: filterVisibleTasks(menu, tasks).length,
    }));
  },
);

export const getVisibleTasks = createSelector(
  [getSelectedMenuItem, getTasks],
  (selectedMenuItem, tasks) => {
    return filterVisibleTasks(selectedMenuItem, tasks);
  },
);
