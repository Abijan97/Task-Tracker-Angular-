import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private taskService:TaskService) { }

  //WITHOUT OBSERVABLES
  // ngOnInit(): void {
  //   this.tasks=this.taskService.getTasks();
  // }

//we use observables becasue we get data from the backend server and they are asynchronize operations

  //  WITH OBSERVABLES
  // ngOnInit(): void {
  //   this.taskService.getTasks().subscribe((tasks)=>
  //   this.tasks=tasks);
  // }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>
    this.tasks=tasks);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
   
  }

  addTask(task:Task){
    console.log(task);
    this.taskService.addTask(task).subscribe((task)=>
    this.tasks.push(task));
    
  }
}
