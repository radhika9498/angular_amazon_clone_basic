import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/products/edit/edit.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:"",
    component: ProductsComponent
  },
  {
    path:"product/add/:id",
    component:EditComponent
  },
  {
    path:"product/add/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }