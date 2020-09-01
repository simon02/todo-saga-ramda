let nextTaskId = 0;

export const addTask = (task) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  ...task,
})

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id,
})