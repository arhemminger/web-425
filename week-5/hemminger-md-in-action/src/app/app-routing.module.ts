/*
============================================
; Title:  Flex-Layout
; Author: Professor Krasso
; Date:  11 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 5.4 - Flex-Layout
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
