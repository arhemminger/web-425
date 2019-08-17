/*
============================================
; Title:  Output Properties
; Author: Professor Krasso
; Date:  17 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 6.3 - Output Properties
;===========================================
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './iprice.quote';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: [`
    :host {
      background-color: coral;
      color: darkblue;
      font-size: 25px;
      height: 40px;
      border: 2px black solid;
      border-radius: 3px;
    }
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      });
   }

  ngOnInit() {
  }

}
