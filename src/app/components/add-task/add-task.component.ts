import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  showAddTask: boolean;
  subscription: Subscription;
  reminder: boolean = false;
  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      alert('please fill up all fields');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onAddNewTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
