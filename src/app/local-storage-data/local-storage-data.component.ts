import { Component, OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  standalone: true,
  selector: 'app-local-storage-data',
  templateUrl: './local-storage-data.component.html',
  styleUrls: ['./local-storage-data.component.css'],
  imports: [CommonModule, EditItemComponent]
})
export class LocalStorageDataComponent implements OnInit {
  storedData: any[] = [];
  itemToEdit: any = null;
  isEditing: boolean = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadDataFromLocalStorage();
    }
  }
  
  loadDataFromLocalStorage(): void {
    const storedData = localStorage.getItem('datas');
    if (storedData) {
      this.storedData = JSON.parse(storedData);
      if (!Array.isArray(this.storedData)) {
        // Si los datos no son un array, intenta convertirlos en uno
        this.storedData = [this.storedData];
      }
    }
  }
  
  deleteItem(item: any): void {
    const index = this.storedData.indexOf(item);
    if (index !== -1) {
      this.storedData.splice(index, 1);
      this.updateLocalStorage();
    }
    
    // Limpiar localStorage si no quedan datos
    if (this.storedData.length === 0) {
      localStorage.removeItem('datas');
    }
  }
  
  editItem(item: any): void {
    this.itemToEdit = {...item}; // Clonar el item para evitar modificaciones directas
    this.isEditing = true;
  }
  
  updateItem(updatedItem: any): void {
    const index = this.storedData.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.storedData[index] = updatedItem;
      this.updateLocalStorage();
      this.cancelEdit();
    }
  }
  
  cancelEdit(): void {
    this.itemToEdit = null;
    this.isEditing = false;
  }
  
  updateLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('datas', JSON.stringify(this.storedData));
    }
  }
}
