import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() singleTask: Task;
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(taskId: number) {
    this.onDeleteTask.emit(taskId);
  }
}
