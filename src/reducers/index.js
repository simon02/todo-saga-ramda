import { combineReducers } from 'redux';

const tasks = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case 'ADD_TASK':
      console.log(action);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
          tags: action.tags || [],
          completeBy: action.completeBy,
          completed: false,
        }
      ]
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.id
          ? {...task, completed: !task.completed}
          : task
      )
    default:
      return state;
  }
}

export default combineReducers({
  tasks,
});