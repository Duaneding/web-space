import { Component, OnInit } from '@angular/core';
import {products}  from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  products = products;
  share(){
    window.alert('商品被分享')
  }
  
  onNotify(){
    window.alert('商品下次售卖时，你将收到通知')
  }
}
