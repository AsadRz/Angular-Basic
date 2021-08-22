import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  subscription?: Subscription;
  showAddTask: boolean = false;
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => {
        this.showAddTask = value;
      });
  }

  ngOnInit(): void {}
  onSubmit = (): void => {
    if (!this.text) {
      alert('Please Add A Task');
      return;
    }

    const newTask = { text: this.text, day: this.day, reminder: this.reminder };
    this.onAddTask.emit(newTask);
  };
}
