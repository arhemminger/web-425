/*
============================================
; Title:  Bob's Computer Repair Shop
; Author: Professor Krasso
; Date:  8 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
//import { FormsModule } from "@angular/forms";    <-- Throwing console error
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { ServicesComponent } from './services/services.component';

// Angular Material imports
import { MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    InvoiceSummaryComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
   // FormsModule,     <-- Throwing console error
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
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
