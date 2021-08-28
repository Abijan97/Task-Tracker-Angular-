import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:5000/tasks';

  //without observables
  // getTasks():Task[] {
  //   return TASKS;
  // }
  //WITH OBSERVABLES
  // getTasks():  Observable<Task[]> {
  //   const tasks=of(TASKS);
  //   return tasks;

  //HTTP REQUEST
  getTasks():  Observable<Task[]> {
   return this.http.get<Task[]>(this.apiUrl);
   
  }

  //delete

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  //updatetask reminder
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  //add task
 addTask(task:Task):Observable<Task>{

  return this.http.post<Task>(this.apiUrl,task,httpOptions);

 }
}
