import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/products';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private CartService:CartService
  ) { }
  product;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = params.get('productId');
      this.product = products[index]
    })
  }
  addToCart(product){
    this.CartService.addToCart(product)
  }

}
