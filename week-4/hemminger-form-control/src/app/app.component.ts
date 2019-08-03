/*
============================================
; Title:  Handling Form Events with Observables
; Author: Professor Krasso
; Date:  2 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 4.3 - Handling Form Events with Observables
;===========================================
*/
import { Component } from '@angular/core';
import { debounceTime } from "rxjs/operators";
import {FormControl} from "@angular/forms";

// app component template with bootstrap navbar and form
@Component({
  selector: 'app-root',
  template:`
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
      </ul>
    </nav>

    <br><br>

    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events with Observables</h2>
          <br>
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text" class="form-control" id="txtStockPrice" placeholder="Enter stock price..." [formControl]="searchInput">
          </div>
        </div>
      </div>

      <br><br>

      <div class="row">
        <div class="col">
          <h4 class="txt-bold">Results: <span id="PriceResults">{{ convertedStockPrice }}</span></h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .txt-bold {
      font-weight: bold;
    }
    #PriceResults {
      display: inline-block;
      background: LightGreen;
      border: 1px solid DarkGreen;
    }
  `
  ]
})
export class AppComponent {
  title = 'hemminger-form-control';

  searchInput = new FormControl('');
  convertedStockPrice: string;

  //setting up observable
  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice =
      `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }
}
