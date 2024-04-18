import { TodoModel } from '../../models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, toggleTodo } from '../actions/todo.action';
import { state } from '@angular/animations';

export interface TodoState {
  todos: TodoModel[];
}

export const initialState: TodoState = {
  todos: [
    {
      id: 1,
      name: 'Todo 1',
      check: true,
    },
  ],
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(removeTodo, (state, { id }) => ({
    todos: state.todos.filter((e) => e.id !== id),
  })),
  on(toggleTodo, (state, { id }) => ({
    todos: state.todos.map((e) =>
      e.id === id ? { ...e, check: !e.check } : e,
    ),
  })),
);
