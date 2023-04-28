import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PizzaItem } from '../models/pizza';
import { MockBackendService } from '../services/mock-backend.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  public $catalogItems: Observable<PizzaItem[]>
  public imagePath: string = '../../assets/pizza/'

  constructor(private mockBackService: MockBackendService) {
    this.$catalogItems = from(this.mockBackService.getPizzaItems())
  }
}
