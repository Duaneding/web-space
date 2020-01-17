import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private CartService:CartService,
    private formbuilder:FormBuilder
  ) {
    this.items  =this.CartService.getItems();
    this.checkoutForm = this.formbuilder.group({
      name:'',
      address:''
    })
  }
  onSubmit(value){
    console.log(value)
    this.items = this.CartService.clearCart();
    this.checkoutForm.reset();
  }
  ngOnInit() {

  }

}
