/*
============================================
; Title:  Child Routes
; Author: Professor Krasso
; Date:  27 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 3.3 - Child Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// template for product detail component
@Component({
  selector: 'app-product-detail',
  template: `
  <div class="container">
    <div class="product">
      <h1>Details for Product Id: {{ productId }}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    .product {
      background-color: silver;
      border: 3px solid steelblue;
    }
  `
  ]
})
// configuration settings for product detail component
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 444;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
