import { configureStore, combineReducers } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import taskReducer, { addTask } from './features/tasks/tasksSlice';
import menuReducer, { add } from './features/menu/menuSlice';
import moment from 'moment';

import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const store = configureStore({
  reducer: combineReducers({
    tasks: taskReducer,
    menu: menuReducer,
  }),
});

store.dispatch(add('tutorial'));
store.dispatch(
  addTask({
    title: 'You should have done this yesterday!',
    completeBy: moment().subtract(1, 'd'),
    category: 'tutorial',
  }),
);

store.dispatch(
  addTask({
    title: 'Get started by adding your own todos',
    completeBy: moment().add(30, 'm'),
    category: 'tutorial',
  }),
);
store.dispatch(
  addTask({
    title: 'Then tick them off.',
    completeBy: moment().add(1, 'd'),
    category: 'tutorial',
  }),
);
store.dispatch(
  addTask({
    title: 'And feel accomplished.',
    completeBy: moment().add(7, 'd'),
    category: 'tutorial',
  }),
);

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
