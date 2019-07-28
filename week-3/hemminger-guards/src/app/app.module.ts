/*
============================================
; Title:  Guarding Routes
; Author: Professor Krasso
; Date:  27 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginGuard } from './login.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy}, LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
