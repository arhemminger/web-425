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

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h1>Welcome to the Child Routes assignment!</h1>
      </div>
      <div class="row">
        <p>Bellevue University - WEB-425</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    p {
      color: purple;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
