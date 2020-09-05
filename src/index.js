import { configureStore, combineReducers } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import taskReducer from './features/tasks/tasksSlice';

import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = configureStore({
  reducer: combineReducers({
    tasks: taskReducer,
  }),
});
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
