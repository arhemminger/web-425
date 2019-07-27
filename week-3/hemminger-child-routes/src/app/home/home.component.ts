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
    <h1>Welcome to the Child Routes assignment!</h1>
    <p>Bellevue University - WEB-425</p>
  `,
  styles: [`
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
