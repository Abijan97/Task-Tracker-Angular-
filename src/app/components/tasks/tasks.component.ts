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

  ngOnInit(): void {
    this.tasks=this.taskService.getTasks();
  }

}
