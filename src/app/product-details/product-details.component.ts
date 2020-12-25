import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = [] as any;
  // product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const productIdFromRoute = this.route.snapshot.paramMap.get('itemId');
    // Find the product that correspond with the id provided in route.
    this.product = products.find((product, index) => {
      return index === Number(productIdFromRoute);
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert(`Your ${product.name} has been added to the cart!`);
  }

}