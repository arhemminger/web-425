/*
============================================
; Title:  Angular CLI
; Author: Professor Krasso
; Date:  9 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 1.3 - Angular CLI
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
