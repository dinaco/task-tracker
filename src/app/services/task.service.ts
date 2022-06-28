import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(taskId: number): Observable<number> {
    const deleteUrl = `${this.apiUrl}/${taskId}`;
    return this.http.delete<number>(deleteUrl);
  }
  toggleReminderTask(task: Task): Observable<Task> {
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }
  addNewTask(newTask: Task) {
    return this.http.post<Task>(this.apiUrl, newTask, httpOptions);
  }
}
