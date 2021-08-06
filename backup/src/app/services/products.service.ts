import { Injectable } from '@angular/core';
import { Products } from '../models/products.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Products[] = [
    {
      id: 1,
      name: "Adidas Cricket Bat-1",
      code:"cribat1",
      price:4000,
      description:"Used to play Cricket",
      rating:5.0,
      image:"https://26b5c92bej542nbc9b3nbw5o-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/435d5aae-144a-4e1e-bda8-74a8a6fc8bce-1000x1063.jpeg",
      category: "Cricket"
   },
   {
       id: 2,
       name: "Adidas Cricket Bat-2",
       code:"cribat2",
       price:1500,
       description:"Used to play Cricket",
       rating:5.0,
       image:"https://www.sportsuncle.com/image/cache/catalog/images/adidas/xt2-2-1200x1200.webp",
       category: "Cricket"
    },
    {
       id: 3,
       name: "Adidas Cricket Bat-3",
       code:"cribat3",
       price:7000,
       description:"Used to play Cricket",
       rating:5.0,
       image:"https://images-na.ssl-images-amazon.com/images/I/61YdrTLzmyL._SL1110_.jpg",
       category: "Cricket"
    },

    {
       id: 4,
       name: "Hoodie-1",
       code:"hood1",
       price:3000,
       description:"Usable in winter",
       rating:4.0,
       image:"https://images-na.ssl-images-amazon.com/images/I/61YdrTLzmyL._SL1110_.jpg",
       category: "Clothing"
    },

    {
       id: 5,
       name: "Hoodie-2",
       code:"hood2",
       price:3000,
       description:"Usable in winter",
       rating:5.0,
       image:"https://images-na.ssl-images-amazon.com/images/I/61YdrTLzmyL._SL1110_.jpg",
       category: "Clothing"
    },
    {
       id: 6,
       name: "Hoodie-3",
       code:"hood2",
       price:3000,
       description:"Usable in winter",
       rating:3.0,
       image:"https://images-na.ssl-images-amazon.com/images/I/61YdrTLzmyL._SL1110_.jpg",
       category: "Clothing"
    }

  ];

  constructor() { }

  onGet(){
    return this.products;
  }
}