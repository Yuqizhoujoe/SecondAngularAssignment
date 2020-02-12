import { Injectable } from '@angular/core';
import { ToDoComponent } from './to-do.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor() { 
    }
    
    searchText;
    todos = [
        "swimming",
        "running",
        "hiking",
        "taking shower",
        "eating",
        "sleeping"
    ];

    getTodos(){
        return this.todos;
    }

    addTodo(newTodo:string){
        if (newTodo) {
            this.todos.push(newTodo);
        }
    }

    removeTodo(index) {
        this.todos.splice(index,1);
    }

}