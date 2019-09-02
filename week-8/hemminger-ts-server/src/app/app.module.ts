/*
============================================
; Title:  Server-Side Communications with Node.js and Express
; Author: Professor Krasso
; Date:  1 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 8.2 - Server-Side Communications with Node.js and Express
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
