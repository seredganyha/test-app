import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CardPizzaComponent } from './components/card-pizza/card-pizza.component';
import { FormOrderComponent } from './components/form-order/form-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavHeaderComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardPizzaComponent,
    FormOrderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
