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

// template for product description component
@Component({
  selector: 'app-product-description',
  template: `
    <p>
      This is an outstanding product so shop now while inventory lasts!
    </p>
  `,
  styles: []
})
// configuration settings for product description component
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
