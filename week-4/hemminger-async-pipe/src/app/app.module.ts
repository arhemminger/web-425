/*
============================================
; Title:  Async Pipe
; Author: Professor Krasso
; Date:  2 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FruitService } from "./fruit.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
