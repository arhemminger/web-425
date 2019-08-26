/*
============================================
; Title:  Template-Driven Forms
; Author: Professor Krasso
; Date:  24 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 7.2 - Template-Driven Forms
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hemminger-template-forms';

  onSubmit(formData) {
    console.log(formData);
  }

}
