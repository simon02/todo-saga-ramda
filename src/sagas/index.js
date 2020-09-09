import { fork, put, takeEvery } from 'redux-saga/effects';
import { add } from '../features/menu/menuSlice';
import { addTask } from '../features/tasks/tasksSlice';

function* addTaskExtended({ task }) {
  yield put(addTask(task));

  if (task.category) {
    yield put(add(task.category));
  }
}

function* watchRequestTask() {
  yield takeEvery('ADD_TASK_EXTENDED', addTaskExtended);
}

export default function* rootSaga() {
  yield fork(watchRequestTask);
}
