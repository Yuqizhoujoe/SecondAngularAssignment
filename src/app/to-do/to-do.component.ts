import { Component, OnInit } from '@angular/core';
import { TodoService } from './to-do.service';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
    todos: string[] = [];
    firstCharacter: string;
    search: string;

    addTodo:any;
    removeTodo:any;

    constructor(private todoService: TodoService) {
        this.todos = todoService.getTodos();
        this.addTodo = todoService.addTodo;
        this.removeTodo = todoService.removeTodo;
    }

    ngOnInit() {
        this.todos = this.todoService.todos;
    }

    searchTodo(){
        if (this.firstCharacter != "") {
            this.todos = this.todos.filter((value) => {
                return value.charAt(0).match(this.firstCharacter.toLocaleLowerCase());
            });
        } else {
            this.ngOnInit();
        }
    }

    clearSearch(){
        this.search = '';
    }

    /* removeTodo(toRemove:string){
        this.todos = this.todos.filter(function(value, index) {
            return value != toRemove;
        });
    } */

    
}