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

// template for home component
@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Welcome to Guarding Routes assignment 3.3</h1>
      <h4>Bellevue University - WEB-425</h4>
      <p class="home">Please login here</p>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    .home {
      background-color: silver;
    }
    h4 {
      color: purple;
    }
  `
  ]
})
// configuration for home component
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
