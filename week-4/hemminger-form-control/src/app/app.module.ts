/*
============================================
; Title:  Handling Form Events with Observables
; Author: Professor Krasso
; Date:  2 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 4.3 - Handling Form Events with Observables
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
