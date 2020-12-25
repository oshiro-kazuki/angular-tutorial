import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [] as any;
  checkoutForm: any;

  constructor(
    private cartservice: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
    });
   }

  ngOnInit() {
    this.items = this.cartservice.getItems();
  }

  onSubmit(customerData: any) {
    this.items = this.cartservice.clearCart();
    this.checkoutForm.reset();
    
    console.warn('Your order has been submitted', customerData);
  }
}