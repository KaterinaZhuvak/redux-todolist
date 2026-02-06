export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO'; // 👈 нове

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});
