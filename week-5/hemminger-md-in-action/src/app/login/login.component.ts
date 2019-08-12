/*
============================================
; Title:  Flex-Layout
; Author: Professor Krasso
; Date:  11 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 5.4 - Flex-Layout
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper parent">
      <div class="left" fxFlex="20%"></div>
      <div class="right" fxFlex="80%">
        <div class="frm-login center" fxFlex="40%">
          <mat-card class="login-panel frm-login-panel">
            <mat-card-header class="frm-login header">
              <mat-toolbar class="frm-login-toolbar">Login Form</mat-toolbar>
            </mat-card-header>
            <mat-card-content class="frm-login-body">
              <mat-form-field>
                <input type="text" matInput placeholder="Username" />
              </mat-form-field>
              <br>
              <mat-form-field>
                <input type="text" matInput placeholder="Password" />
              </mat-form-field>
            </mat-card-content>

            <mat-card-actions class="frm-login-actions">
              <button mat-raised-button class="btn-login">Sign In</button>
              <button mat-raised-button class="btn-cancel">Cancel</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}