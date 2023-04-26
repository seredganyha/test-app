import { Injectable } from '@angular/core';
import { PizzaItem } from '../models/pizza';

export interface OrderResponse {
  message: string;
}

const successfulOrderResponseMessage = 'Cпасибо за заказ';

const pizzaItems: PizzaItem[] = [
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  },
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  },
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  },
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  },
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  },
  {
    name: 'Сладкая курочка',
    description: '',
    price: 123,
    id: 1
  }
]

@Injectable({
  providedIn: 'root'
})

export class MockBackendService {

  constructor() {
  }

  public async getPizzaItems(): Promise<PizzaItem[]> {
    return await pizzaItems;
  }

  public async postOrder(): Promise<OrderResponse> {
    return await {message: successfulOrderResponseMessage}
  }
}
