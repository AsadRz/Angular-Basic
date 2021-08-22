import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseURL = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  // A function to get tasks from mock file
  getMockTasks = (): Task[] => {
    return TASKS;
  };

  // A function to get task from mock file using observables
  getMockTaskUsingObservable = (): Observable<Task[]> => {
    const tasks = of(TASKS);
    return tasks;
  };

  getRealTasks = (): Observable<Task[]> => {
    return this.http.get<Task[]>(this.baseURL);
  };

  deleteRealTask = (task: Task): Observable<Task> => {
    const url = `${this.baseURL}/${task.id}`;
    return this.http.delete<Task>(url);
  };
}
