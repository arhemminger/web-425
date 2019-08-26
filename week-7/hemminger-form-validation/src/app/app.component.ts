/*
============================================
; Title:  Form Validation
; Author: Professor Krasso
; Date:  25 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 7.3 - Form Validation
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hemminger-form-validation';

  onSubmit (formData) {
    console.log(formData);
  }
}
