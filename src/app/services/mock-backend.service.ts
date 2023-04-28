import { Injectable } from '@angular/core';
import { PizzaItem } from '../models/pizza';

export interface OrderResponse {
  message: string;
}
export interface OrderRequest {
  name: string;
  phone: string;
  address: string;
}

const successfulOrderResponseMessage = 'Cпасибо за заказ';

const pizzaItems: PizzaItem[] = [
  {
    name: 'Мясная делюкс',
    description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы,',
    price: 123,
    id: 1
  },
  {
    name: 'Морская Премиум',
    description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    price: 123,
    id: 2
  },
  {
    name: 'Бекон и Сосиски',
    description: 'Бекон, сыр, сосиски, ананас, томатная паста',
    price: 123,
    id: 3
  },
  {
    name: 'Куриная делюкс',
    description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    price: 123,
    id: 4
  },
  {
    name: 'Барбекю Премиум',
    description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чи',
    price: 123,
    id: 5
  },
  {
    name: 'Пепперони Дабл',
    description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
    price: 123,
    id: 6
  },
  {
    name: 'Куриное трио',
    description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, г',
    price: 123,
    id: 7
  },
  {
    name: 'Сырная',
    description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    price: 123,
    id: 8
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

  public async postOrder(req: OrderRequest): Promise<OrderResponse> {
    console.log(req)
    return await {message: successfulOrderResponseMessage}
  }
}
