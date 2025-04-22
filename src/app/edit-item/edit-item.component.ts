import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit {
  @Input() item: any = null;
  @Output() itemUpdated = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<void>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    if (this.item) {
      this.editForm.patchValue(this.item);
    }
  }

  saveChanges(): void {
    if (this.editForm.valid) {
      const updatedItem = {
        ...this.item,
        name: this.editForm.value.name
      };
      this.itemUpdated.emit(updatedItem);
      this.cancelEdit.emit(); 
    }
  }
  

  cancel(): void {
    this.cancelEdit.emit(); 
  }
}