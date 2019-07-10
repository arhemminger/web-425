/*
============================================
; Title:  shipping.module.ts
; Author: Professor Krasso
; Date:  9 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 1.5 - Modules
;===========================================
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';

@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }
