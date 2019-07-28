/*
============================================
; Title:  Guarding Routes
; Author: Professor Krasso
; Date:  27 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="container">
      <h1 class="product">Product Detail Component</h1>
      <input placeholder="Enter your name here..." type="text" [formControl]="name">
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    .product {
      background-color: sliver;
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }
}
