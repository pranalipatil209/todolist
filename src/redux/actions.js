import { ADD_TODO, TOGGLE_TODO, DEL_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  }
});

export const removeTodo = id => (
  {
  type: DEL_TODO,
  payload: {
    id: id,
  }});

export const toggleTodo = todo => ({
  type: TOGGLE_TODO,
  payload: { 
    id:todo.id,
    content:todo.content,
     }
});

