/*
============================================
; Title:  Angular CLI
; Author: Professor Krasso
; Date:  9 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 1.3 - Angular CLI
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello World!';
}
