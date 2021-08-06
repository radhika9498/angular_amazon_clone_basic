import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.products = this.productservice.onGet();
  }

  onDelete(id: String){
    this.productservice.onDelete(id);
  }

   filterstring="";
   onSearchChange(search){
     this.filterstring=search;
   }

}
