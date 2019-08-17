/*
============================================
; Title:  Input Properties
; Author: Professor Krasso
; Date:  17 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 6.2 - Input Properties
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hemminger-input-properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
