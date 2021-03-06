import { Component, OnInit } from '@angular/core';

import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  /**
   * Three Variables to hold mock data from file using observables and from API call
   */
  mockTasks: Task[] = [];
  mockTasksUsingObservable: Task[] = [];
  realTasks: Task[] = [];

  /**
   *
   * @param taskService Service used for getting the tasks Data
   */
  constructor(private taskService: TaskService) {}

  /**
   * Three functions from services called and saved in different variables
   */
  ngOnInit(): void {
    this.mockTasks = this.taskService.getMockTasks();
    this.taskService.getMockTaskUsingObservable().subscribe((mockTasks) => {
      this.mockTasksUsingObservable = mockTasks;
    });
    this.taskService
      .getRealTasks()
      .subscribe((tasks) => (this.realTasks = tasks));
  }

  deleteTask = (task: Task): void => {
    this.taskService
      .deleteRealTask(task)
      .subscribe(
        () => (this.realTasks = this.realTasks.filter((t) => t.id !== task.id))
      );
  };

  toggleTask = (task: Task) => {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  };

  addTask = (task: Task) => {
    this.taskService
      .addTask(task)
      .subscribe((task) => this.realTasks.push(task));
  };
}
