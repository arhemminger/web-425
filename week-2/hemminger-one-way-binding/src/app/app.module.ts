/*
============================================
; Title:  One-Way Binding
; Author: Professor Krasso
; Date:  21 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 2.2 - One-Way Binding
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
