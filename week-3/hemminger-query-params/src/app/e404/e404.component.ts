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

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>404 Page Not Found!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
      border-bottom: 3px solid red;
    }
    h2 {
      color: black;
    }
  `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
