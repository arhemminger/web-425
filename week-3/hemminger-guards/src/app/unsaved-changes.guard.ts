/*
============================================
; Title:  Guarding Routes
; Author: Professor Krasso
; Date:  27 July 2019
; Modified by: Andrew Hemminger
; Description: Assignment 3.4 - Guarding Routes
;===========================================
*/
import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes. Do you still want to leave?");
    }
    else {
      return true;
    }
  }
}
