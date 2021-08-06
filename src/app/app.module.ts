import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compos/header/header.component';
import { ProductsComponent } from './compos/products/products.component';
import {ProductService} from './services/product.service';
import { HomeComponent } from './compos/home/home.component';
import { EditComponent } from './compos/products/edit/edit.component';
import { FooterComponent } from './compos/footer/footer.component'
import { Rating } from './rating/rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    HomeComponent,
    EditComponent,
    FooterComponent,
    Rating
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
