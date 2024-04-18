import { Component } from '@angular/core';
import { addTodo } from '../../stores/actions/todo.action';
import { TodoModel } from '../../models/todo.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  nameTodo = '';
  todos: TodoModel[] = [];

  constructor(private store: Store<{ todos: { todos: TodoModel[] } }>) {
    store.select('todos').subscribe((todoState) => {
      this.todos = todoState.todos;
    });
  }

  addTodo() {
    console.log(this.nameTodo);
    const todo: TodoModel = {
      id: 2,
      name: this.nameTodo,
      check: false,
    };
    this.store.dispatch(addTodo({ todo }));
  }
}
