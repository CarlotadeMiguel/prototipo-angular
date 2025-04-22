import { Component, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  @Input() item: any;
  @Output() delete = new EventEmitter<any>();
 
  deleteItem(): void {
    this.delete.emit(this.item);
  }
}
