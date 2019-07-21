/*
============================================
; Title:  Routing in Action
; Author: Professor Krasso
; Date:  21 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 2.4 - Routing in Action
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Home</h2>
      </div>

      <br />

      <div class="row">
        <p>This is the Home page for assignment 2.4 - web-425 Bellevue University.</p>
      </div>
      <div class="row">
        <p>Check out the links above for more content!</p>
      </div>

    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: Blue;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
