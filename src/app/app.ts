import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSlider } from './main-slider/main-slider';
import { TopMenu } from './top-menu/top-menu';
import { ProductCard } from './product-card/product-card';
import {
  NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, JsonPipe, TitleCasePipe

} from '@angular/common';
import { KhmerCurrencyPipe } from './khmer-currency-in-pipe';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, MainSlider, TopMenu, ProductCard, NgStyle, UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe,
    DecimalPipe, PercentPipe, SlicePipe, JsonPipe, TitleCasePipe, KhmerCurrencyPipe
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'

})

/* 1
export class App {
  title: string = 'sv2_todo_ng';
  std_name: string = 'Bora';
  age: number = 25;
  project_url: string = 'https://files.shapes.inc/api/files/avatar_f10911e8-d770-4f14-8819-5a2f2cabfa07.png';

} */

/* 2
export class App {

  image_array: string[] = [
      '3bdd27.jpg',
      'maxresdefault.jpg',
      'Two-Soyjacks-Transparent-meme-5.png',
      'draco-malfoy-harry-potter.gif',
      'Leo-DiCaprio-in-Django-Unchained.avif',
      'Patrick-Bateman-Sigma-Face-Meme-Template-1.webp',
      'png-transparent-jay-gatsby-leonardo-dicaprio-the-great-gatsby-hollywood-meme-leonardo-dicaprio-celebrities-culture-film-thumbnail.png'

  ];
  
  images: string[] = [];

  

  is_disable: boolean = false;

  height: number = 200;
  width: number = 200;
  show_image: boolean = true;

  constructor() {
    this.images = [];
  }
  
  changeImage(): void{

    this.show_image = false;
    this.images = [];


    for(let i = 0; i < 5; i++ ){
      const random_index: number = Math.floor(Math.random() * this.image_array.length);
      this.images.push(this.image_array[random_index]);
    }


  }
  
  changeDisable(): void{
    this.is_disable = !this.is_disable;
  }

  addSize(): void{
    this.height += 10;
    this.width += 10;
  }

  removeSize(): void{
    this.height -= 10;
    this.width -= 10;
  }

  toggleImage(): void{
    this.show_image = !this.show_image;
  }

} 

*/



/*
export class App {

  image: string = 'draco-malfoy-harry-potter.gif';
  std_name:string = 'vireak dara';
  date:Date = new Date();
  std_dob:Date = this.date;
  salary:number = 1000000;
  json_data:any = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }



  Math = Math;


  

}

*/



export class App {
  image: string = '3bdd27.jpg';
  products: any[] = [
    {
      "id": 1,
      "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "qty": 247
    },
    {
      "id": 2,
      "name": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "qty": 396
    },
    {
      "id": 3,
      "name": "Mens Cotton Jacket",
      "price": 55.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "qty": 385
    },
    {
      "id": 4,
      "name": "Mens Casual Slim Fit",
      "price": 15.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "qty": 275
    },
    {
      "id": 5,
      "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "qty": 182
    },
    {
      "id": 6,
      "name": "Solid Gold Petite Micropave ",
      "price": 168,
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "qty": 453
    },
    {
      "id": 7,
      "name": "White Gold Plated Princess",
      "price": 9.99,
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "qty": 490
    },
    {
      "id": 8,
      "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "qty": 102
    },
    {
      "id": 9,
      "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "qty": 412
    },
    {
      "id": 10,
      "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "qty": 489
    },
    {
      "id": 11,
      "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "qty": 490
    },
    {
      "id": 12,
      "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "qty": 93
    },
    {
      "id": 13,
      "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "qty": 479
    },
    {
      "id": 14,
      "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
      "price": 999.99,
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "qty": 268
    },
    {
      "id": 15,
      "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "qty": 326
    },
    {
      "id": 16,
      "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "qty": 97
    },
    {
      "id": 17,
      "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "qty": 178
    },
    {
      "id": 18,
      "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "qty": 112
    },
    {
      "id": 19,
      "name": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "qty": 485
    },
    {
      "id": 20,
      "name": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "qty": 404
    }
  ];


  
}