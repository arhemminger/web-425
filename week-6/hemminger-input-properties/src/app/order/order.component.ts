/*
============================================
; Title:  Input Properties
; Author: Professor Krasso
; Date:  17 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 6.2 - Input Properties
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
      <span *ngIf="!!stockSymbol">Buying {{ quantity }} shares of {{ stockSymbol }}</span>
  `,
  styles: [`
    :host {
      background: grey;
      color: aliceblue;
      font-size: 25px;
      height: 40px;
    }
  `]
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
