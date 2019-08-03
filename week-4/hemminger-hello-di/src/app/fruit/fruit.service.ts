/*
============================================
; Title:  Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date:  2 August 2019
; Modified by: Andrew Hemminger
; Description: Assignment 4.2 - Inversion of Control and Dependency Injection
;===========================================
*/
import { Injectable } from '@angular/core';
import {Fruit} from './fruit';

// getFruit function passing in id, name, and color
@Injectable()
export class FruitService {
  getFruit(): Fruit {
    return new Fruit (0, "Kiwi", "Brown");
  }
}
