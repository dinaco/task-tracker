import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;
  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

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
