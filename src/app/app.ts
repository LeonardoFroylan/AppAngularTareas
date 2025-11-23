import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, FormsModule],
  templateUrl: './app.html', // Enlaza con html
  styleUrl: './app.css'      // Enlaza con css
})
export class App {
  // Tareas iniciales
  todoArray: string[] = ['Dominar Angular 20', 'Practicar TypeScript', 'Hacer ejercicio'];

  newTodo: string = '';
  errorMsg: string = '';

  // Método para agregar una nueva tarea
  addTodo() {
    if (this.newTodo.trim() === '') {
      this.errorMsg = '¡Escribe una tarea primero!';
      // Borra el mensaje de error después de 2 segundos
      setTimeout(() => this.errorMsg = '', 2000);
      return;
    }

    // la tarea se agrega al inicio de la lista
    this.todoArray.unshift(this.newTodo);
    this.newTodo = '';
    this.errorMsg = '';
  }

  // Método para eliminar una tarea por su índice
  deleteItem(index: number) {
    this.todoArray.splice(index, 1);
  }
}
