import { Component } from '@angular/core';
<<<<<<< HEAD
import { Task } from './task.model';
=======
>>>>>>> 377b781e36c0ed74d6e10967bd84e618191fc464

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
<<<<<<< HEAD
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task>
  </div>
=======
   <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>
   <ul>
    <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
  </ul>
    <hr>
    <div>
    <div *ngIf="selectedTask">

     <h3>{{selectedTask.description}}</h3>
     <p>Task Complete? {{selectedTask.done}}</p>
    <h3>Edit Task</h3>
    <label>Enter Task Description:</label>
    <input [(ngModel)]="selectedTask.description">
     <label>Enter Task Priority (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
     <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
     <br>
     <button (click)="finishedEditing()">Done</button>
     </div>
    </div>
   </div>
>>>>>>> 377b781e36c0ed74d6e10967bd84e618191fc464
`
})

export class AppComponent {
<<<<<<< HEAD
=======

>>>>>>> 377b781e36c0ed74d6e10967bd84e618191fc464
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
<<<<<<< HEAD
  selectedTask = null;

  masterTaskList: Task[] = [
   new Task('Finish weekend Angular homework for Epicodus course', 3),
   new Task('Begin brainstorming possible JavaScript group projects', 2),
   new Task('Add README file to last few Angular repos on GitHub', 2)
 ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }

  
=======
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 1),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
isDone(clickedTask: Task) {
  if(clickedTask.done === true) {
    alert("This task is done!");
  } else {
    alert("This task is not done. Better get to work!");
  }
}

priorityColor(currentTask){
  if (currentTask.priority === 3){
    return "bg-danger";
  } else if (currentTask.priority === 2) {
    return  "bg-warning";
  } else {
    return "bg-info";
  }
}

}


export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {   }
>>>>>>> 377b781e36c0ed74d6e10967bd84e618191fc464
}
