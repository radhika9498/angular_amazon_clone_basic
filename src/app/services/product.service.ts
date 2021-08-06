import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      "id": "1",
      "name": "Adidas Cricket Bat-1",
      "code":"cribat1",
      "price":4000,
      "description":"Used to play Cricket",
      "rating":5.0,
      "image":"https://26b5c92bej542nbc9b3nbw5o-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/435d5aae-144a-4e1e-bda8-74a8a6fc8bce-1000x1063.jpeg",
      "category": "Cricket"
   },
   {
       "id": "2",
       "name": "Adidas Cricket Bat-2",
       "code":"cribat2",
       "price":1500,
       "description":"Used to play Cricket",
       "rating":5.0,
       "image":"https://www.sportsuncle.com/image/cache/catalog/images/adidas/xt2-2-1200x1200.webp",
       "category": "Cricket"
    },
    {
       "id": "3",
       "name": "Adidas Cricket Bat-3",
       "code":"cribat3",
       "price":7000,
       "description":"Used to play Cricket",
       "rating":5.0,
       "image":"https://images-na.ssl-images-amazon.com/images/I/61YdrTLzmyL._SL1110_.jpg",
       "category": "Cricket"
    },

    {
       "id": "4",
       "name": "Hoodie-1",
       "code":"hood1",
       "price":3000,
       "description":"Usable in winter",
       "rating":4.0,
       "image":"https://5.imimg.com/data5/SELLER/Default/2020/9/KG/PZ/DR/27070405/alien-print-sleeve-hoodie-for-girl-s-500x500-500x500.png",
       "category": "Clothing"
    },

    {
       "id": "5",
       "name": "Hoodie-2",
       "code":"hood2",
       "price":3000,
       "description":"Usable in winter",
       "rating":5.0,
       "image":"https://shop.googlemerchandisestore.com/store/20160512512/assets/items/largeimages/GGOEGXXX1109.jpg",
       "category": "Clothing"
    },
    {
       "id": "6",
       "name": "Hoodie-3",
       "code":"hood2",
       "price":3000,
       "description":"Usable in winter",
       "rating":3.0,
       "image":"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F82%2Ff9%2F82f9a0d1871d98ec4b991112a4008094c8c3c595.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/main]",
       "category": "Clothing"
    }

  ]

  constructor() { }
  onGet(){
     return this.products;
  }

  onGetProduct(id: Number){
   return this.products.find(x=> x.id === id.toString());
  }

  onAdd(product: Product){
     this.products.push(product);
  }
  
  onDelete(id: String){
   let product = this.products.find(x=>x.id===id);
   let index = this.products.indexOf(product, 0);
   this.products.splice(index,1)
   }

   onUpdate(product: Product){
      let oldproduct = this.products.find(x=> x.id === product.id.toString());
      oldproduct.id = product.id
      oldproduct.name = product.name
      oldproduct.code = product.code
      oldproduct.price = product.price
      oldproduct.description = product.description
      oldproduct.rating = product.rating
      oldproduct.image = product.image
      oldproduct.category = product.category
   }

}
