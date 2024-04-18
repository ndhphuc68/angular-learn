import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../../models/todo.model';

export enum todoAction {
  AddTodo = '@Todo/Add',
  RemoveTodo = '@Todo/Remove',
  ToggleTodo = '@Todo/Toggle',
}

export const addTodo = createAction(
  todoAction.AddTodo,
  props<{ todo: TodoModel }>(),
);

export const removeTodo = createAction(
  todoAction.RemoveTodo,
  props<{ id: number }>(),
);

export const toggleTodo = createAction(
  todoAction.ToggleTodo,
  props<{ id: number }>(),
);
