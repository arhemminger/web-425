/*
============================================
; Title:  Async Pipe
; Author: Professor Krasso
; Date:  2 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 4.4 - Async Pipe
;===========================================
*/
import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: "Kiwi", pricePerPound: ".68", quantity: "5"},
    {id: 1, name: "Dragon Fruit", pricePerPound: "3.00", quantity: "2"},
    {id: 1, name: "Pomegranate", pricePerPound: "1.72", quantity: "1"},
    {id: 1, name: "Mango", pricePerPound: ".50", quantity: "6"},
    {id: 1, name: "Pineapple", pricePerPound: "1.25", quantity: "1"},
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]>{
    return of(this.fruits);
  }
}
