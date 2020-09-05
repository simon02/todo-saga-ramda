import { createSelector } from 'reselect';
import moment from 'moment';
import {
  ALL_MENU_ITEM,
  OVERDUE_MENU_ITEM,
  UNCATEGORIZED_MENU_ITEM,
} from '../menu/menuSlice';

const getSelectedMenuItem = (state) => state.menu.selected;
const getTasks = (state) => state.tasks;

export const getVisibleTasks = createSelector(
  [getSelectedMenuItem, getTasks],
  (selectedMenuItem, tasks) => {
    switch (selectedMenuItem) {
      case ALL_MENU_ITEM:
        return tasks;
      case OVERDUE_MENU_ITEM:
        return tasks.filter(({ completeBy }) => moment().isAfter(completeBy));
      case UNCATEGORIZED_MENU_ITEM:
        return tasks.filter(({ category }) => !category);
      default:
        return tasks.filter(({ category }) => category === selectedMenuItem);
    }
  },
);
