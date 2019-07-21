/*
============================================
; Title:  Two-Way Binding
; Author: Professor Krasso
; Date:  21 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 2.3 - Two-Way Binding
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <br /><br /><br />

    <div class="container-fluid two-way-form">
      <h2>Assignment 2.3 - Two-Way Binding</h2><br />
      <div class="form-group">
          <input class="form-control" type="text"
                 placeholder="Enter your name here..."
                 [(ngModel)]="name">
          <button class="btn btn-dark form-control" (click)="name=''">Clear Name</button>
      </div>
      <div class="form-group">
          <p class="alert-success">Look and see how neat two-way binding is, {{name}}! </p>
      </div>


    </div>
  `,
  styles: [
    `
      .two-way-form {
        width: 50%;
      }
    `
  ]
})
export class AppComponent {
  //class property
  name: string;
}
