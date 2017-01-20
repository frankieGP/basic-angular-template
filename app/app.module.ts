import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
<<<<<<< HEAD
import { TaskListComponent }  from './task-list.component';
import { EditTaskComponent }  from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  TaskListComponent,
                  EditTaskComponent,
                  NewTaskComponent,
                  CompletenessPipe],
=======

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent ],
>>>>>>> 377b781e36c0ed74d6e10967bd84e618191fc464
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
