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
import { ActivatedRoute } from '@angular/router';

// template for the user component
@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>User Detial for UserId: {{ userId }}</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color: purple;
    }
  `
  ]
})
// config for the user component
export class UserComponent implements OnInit {
  UserId: String;

  constructor(route: ActivatedRoute) {
    this.UserId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
