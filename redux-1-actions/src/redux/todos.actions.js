export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// Your job is to write two action creators:

export const addTodo = newTodo => {
  let action = {
    type: ADD_TODO,
    payload: newTodo
  };
  return action;
};

export const removeTodo = id => {
  let action = {
    type: REMOVE_TODO,
    payload: id
  };
  return action;
};
