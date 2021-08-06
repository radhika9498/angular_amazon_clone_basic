import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { HomeComponent } from './compos/home/home.component';
import { EditComponent } from './compos/products/edit/edit.component';
import { ProductsComponent } from './compos/products/products.component';
//import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"home", component: HomeComponent},
  {path:"products/product/edit/:id", component: EditComponent},
  {path:"products/product/add/:id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }