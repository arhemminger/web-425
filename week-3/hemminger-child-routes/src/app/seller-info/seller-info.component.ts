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

// template for seller info component
@Component({
  selector: 'app-seller-info',
  template: `
    The seller is Andrew Hemminger, id {{ sellerID }}
  `,
  styles: [`
    host: { background: teal;}
  `
  ]
})
// configuration settings for seller info component
export class SellerInfoComponent implements OnInit {
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
