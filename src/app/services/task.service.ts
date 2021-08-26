import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  //without observables
  // getTasks():Task[] {
  //   return TASKS;
  // }

  getTasks():  Observable<Task[]> {
    const tasks=of(TASKS);
    return tasks;

   
  }
}
