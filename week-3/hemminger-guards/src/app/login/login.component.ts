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

@Component({
  selector: 'home',
  template: `
    <div class="container">
      <h1 class="home">Please login here</h1>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    .home {
      background-color: steelblue;
    }
  `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
