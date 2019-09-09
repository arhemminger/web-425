/*
============================================
; Title:  Bob's Computer Repair Shop
; Author: Professor Krasso
; Date:  8 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceSummaryComponent } from "./invoice-summary/invoice-summary.component";
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'invoice-summary', component: InvoiceSummaryComponent },
  { path: 'services', component: ServicesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
