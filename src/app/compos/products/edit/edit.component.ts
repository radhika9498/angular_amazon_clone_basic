import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: Number;
  header: String;
  product: Product = {
     id:'',
     name:'',
     code:'',
     price:0,
     description:'',
     rating:0,
     image:'',
     category:''
  };

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Product' : 'Edit Product';
    

    if(this.id != 0){
      this.product = this.productService.onGetProduct(this.id);
    }
    
  }

  onSubmit(form: NgForm) {
    let product: Product = {
      id: form.value.id,
      name: form.value.name,
      code: (form.value.code).replace(/ /g, "*"),
      price: form.value.price,
      description: form.value.description,
      rating: form.value.rating,
      image: form.value.image,
      category: form.value.category
    }

    if(this.id === 0){
      this.productService.onAdd(product);
    }
    else{
      this.productService.onUpdate(product);
      this.router.navigateByUrl('/products');
    }

    this.router.navigateByUrl('/products');
  }


}
