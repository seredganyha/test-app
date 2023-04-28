import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaItem } from '../../models/pizza';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-pizza',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './card-pizza.component.html',
  styleUrls: ['./card-pizza.component.scss']
})
export class CardPizzaComponent {
  @Input() pizzaInfo!: PizzaItem;

  public isOpenModal = false;
  public imagePath: string = '../../assets/pizza/'

  openModal() {
    this.isOpenModal = true
  }
  closeModal() {
    this.isOpenModal = false
  }

  openImage() {
    this.openModal();
  }
  
  constructor() {}

}
