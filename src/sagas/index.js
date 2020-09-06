import { takeEvery, put, call } from 'redux-saga/effects';
import { addTask } from '../features/tasks/tasksSlice';
import { add } from '../features/menu/menuSlice';
import { all } from 'ramda';

function* helloSaga() {
  console.log('Hello Saga!');
}

function* addTaskExtended(task) {
  yield call(helloSaga);
  yield put(addTask(task));

  if (task.category) {
    yield put(add(task.category));
  }
}

function* watchRequestTask() {
  yield takeEvery('ADD_TASK_COMPLEX', addTaskExtended);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchRequestTask()]);
}
