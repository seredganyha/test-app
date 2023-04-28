import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { MockBackendService, OrderResponse } from 'src/app/services/mock-backend.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-order',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {
  public orderForm: FormGroup;
  public isOpenModal: boolean = false;
  public $response!: Observable<OrderResponse> | null;

  isActive: boolean = false;

  constructor(private formBuilder: FormBuilder, private mockBackService: MockBackendService) {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-яA-я]*')]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }

  get name() {
    return this.orderForm.get('name');
  }

  get address() {
    return this.orderForm.get('address');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  openModal() {
    this.isOpenModal = true
  }
  closeModal() {
    this.isOpenModal = false
  }

  onSubmit(): void {
    this.openModal();
    this.$response =  from(this.mockBackService.postOrder({
      name: this.orderForm.get('name')?.value,
      phone: this.orderForm.get('phone')?.value,
      address: this.orderForm.get('address')?.value,
    }))
  }
}
