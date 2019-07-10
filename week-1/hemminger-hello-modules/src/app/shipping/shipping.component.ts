/*
============================================
; Title:  shipping.components.ts
; Author: Professor Krasso
; Date:  9 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 1.5 - Modules
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Here is the ShippingComponent template!
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
