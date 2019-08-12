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
  selector: 'app-home',
  template: `
    <div class="parent">
    <div class="left" fxFlex="20%"></div>
    <div class="right" fxFlex="80%">
      <h2 class="center">Andrew Hemminger's Material Design app using Flex-Layout!</h2>
    </div>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
