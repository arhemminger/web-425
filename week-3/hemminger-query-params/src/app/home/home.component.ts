/*
============================================
; Title:  Passing Data to Routes
; Author: Professor Krasso
; Date:  27 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 3.2 - Passing Data to Routes
;===========================================
*/
import { Component, OnInit } from '@angular/core';

// template for the home component
@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Passing Data to Routes Home Page!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: brown;
    }
  `
  ]
})
// config for the home component
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
