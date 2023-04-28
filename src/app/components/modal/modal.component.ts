import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderResponse } from 'src/app/services/mock-backend.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() response!: OrderResponse | null;
  @Input() imageId!: number | null;
  @Output() hasCloseModal = new EventEmitter<boolean>();

  constructor() { }

  closeModal() {
    this.hasCloseModal.emit(false)
  }
}