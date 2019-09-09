/*
============================================
; Title:  Bob's Computer Repair Shop
; Author: Professor Krasso
; Date:  8 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule } from "@angular/material";
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceSummaryComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
