import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  imports: [CommonModule, FormsModule]
})

export class AddTaskComponent {
  userDetails = {
    name: '',
    id: Date.now()
  };

  constructor() {
  }

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);

      // Obtener los datos previos del localStorage
      let storedData: any[] = Object.values( JSON.parse(localStorage.getItem('datas') || '[]'));

      // Agregar los nuevos detalles del usuario
      storedData.push({...this.userDetails});
      // Guardar el array actualizado en localStorage
      localStorage.setItem('datas', JSON.stringify(storedData));
      console.log('Data saved:', storedData);
    }
  }
}
