import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(taskId: number) {
    this.taskService
      .deleteTask(taskId)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id !== taskId))
      );
  }
  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleReminderTask(task).subscribe();
  }
}
