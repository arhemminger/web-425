/*
============================================
; Title:  One-Way Binding
; Author: Professor Krasso
; Date:  21 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 2.2 - One-Way Binding
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>`,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})

export class AppComponent {
  title = 'one-way-binding';

  //class property
  name:string = "Andrew Hemminger";

  //change name function
  changeName() {
    this.name = "Hemminger, Andrew";
  }
}
