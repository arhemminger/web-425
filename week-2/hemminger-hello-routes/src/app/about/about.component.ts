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
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2>About Me</h2>
      </div>

      <br />

      <div class="row">
        <p>This is the About Me page for assignment 2.4 - web-425 Bellevue University.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: Purple;
    }
    `
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
