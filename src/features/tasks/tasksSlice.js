import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { add } from '../menu/menuSlice';
import { store } from '../../index';

let taskId = 1;

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push({
          ...action.payload,
          completed: false,
        });

        // debugger;
        // if (action.payload?.category) {
        //   store.dispatch(add(action.payload.category));
        // }
      },
      prepare(payload) {
        return {
          payload: {
            ...payload,
            id: taskId++,
          },
        };
      },
    },
    toggleTask: (state, { payload: id }) => {
      const task = state.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
