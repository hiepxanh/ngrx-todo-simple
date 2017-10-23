import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromStore from './note/reducers/todo';
import * as todoAction from './note/actions/todo';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: Observable<any>;
  todos: Observable<any>;
  task:any;
  constructor(
    private store: Store<fromStore.IAppState>
  ) {
    this.total = store.select('todo','total');
    this.todos = store.select('todo','todos');
  }

  addTodo(text) {
    this.store.dispatch(new todoAction.AddTodo(text));
  }

  removeTodo(index) {
    this.store.dispatch(new todoAction.RemoveTodo(index));
  }

  doneTodo(checked,index) {
    console.log('checked',checked)
    if (checked) this.store.dispatch(new todoAction.DoneTodo(index));
    else this.store.dispatch(new todoAction.UndoneTodo(index));
  }
}
