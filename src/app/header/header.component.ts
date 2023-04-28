import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public advantages = [
    {
      image: 'hop',
      title: 'Лучшее тесто',
      text: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества'
    },
    {
      image: 'kitchen-pack',
      title: 'лучшие повара',
      text: 'Пиццы готовят самые профессиональные итальянские повара'
    },
    {
      image: 'seo-and-web',
      title: 'гарантия качества',
      text: 'Наша пиццерия получила множество наград и признаний по всему миру'
    },
    {
      image: 'holidays',
      title: 'отборные рецепты',
      text: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы'
    }
  ]
}
