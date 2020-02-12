import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteDirective } from './favorite.directive';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ChildComponent } from './child/child.component';
import { TodoService } from './to-do/to-do.service';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoComponent,
    FavoriteDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
