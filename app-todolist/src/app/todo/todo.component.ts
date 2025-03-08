import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: string[] = []; // Array to store tasks
  newTask: string = ''; // String to bind to input field

  // Function to add a new task
  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Clear the input field after adding
    }
  }
   // Function to remove a task
   removeTask(task: string): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }


}
