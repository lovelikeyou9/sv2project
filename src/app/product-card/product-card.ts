import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhmerCurrencyPipe } from '../khmer-currency-in-pipe';

@Component({
  selector: 'app-product-card',
  imports: [ CommonModule, KhmerCurrencyPipe ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})

export class ProductCard {
  @Input() product: any = [];

  



}
