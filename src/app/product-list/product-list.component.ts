import { Component } from '@angular/core';
// import { AnySrvRecord } from 'dns';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(name: string) {
    window.alert(`The ${name} has been shared!`);
  }

  onNotify(name: string) {
    this.onSaleAleart(name);
  }

  onSaleAleart(name: string) {
    window.alert(`You will be notified when the product goes on sale : ${name}`);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/