import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask: string = '';
  tasks: Task[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true,
    },
    {
      title: 'Realizar la estructura HTML',
      completed: true,
    },
    {
      title: 'Desplegar el proyecto en la web',
      completed: false,
    },
  ];
  
  searchTerm: string = '';

  get filteredTasks(): Task[] {
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addTask(): void {
    const taskTitle = this.newTask.trim();
  if (taskTitle) {
    const task: Task = {
      title: taskTitle,
      completed: false,
    };
    this.tasks.push(task);
    this.newTask = '';
  }
  }

  updateTask(task: Task, title: string): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks[index].title = title;
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: Task, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }

  filterTasks(): void {
  }
}