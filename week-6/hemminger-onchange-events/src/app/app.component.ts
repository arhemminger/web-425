/*
============================================
; Title:  OnChange() Events
; Author: Professor Krasso
; Date:  17 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 6.4 - OnChange() Events
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hemminger-onchange-events';

  myGreeting = 'Hello';
  myUser: { name: string } ={ name: 'Andrew' }
}
