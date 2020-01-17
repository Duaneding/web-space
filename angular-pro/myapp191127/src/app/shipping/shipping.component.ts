import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private CartService:CartService) { 
    this.shippingCosts = this.CartService.getShippingPrices()
    console.log(this.shippingCosts)
  }

  ngOnInit() {
  }

}
