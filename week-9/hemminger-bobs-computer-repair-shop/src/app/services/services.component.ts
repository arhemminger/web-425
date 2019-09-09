/*
============================================
; Title:  Bob's Computer Repair Shop
; Author: Professor Krasso
; Date:  8 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
  <div class="wrapper">
  <div class="frm-services">
    <mat-card >
      <mat-card-header class="center">
          <mat-card-title class="center">Services Form</mat-card-title>
      </mat-card-header>
      <mat-card-content class="frm-services-body">
        <section>
          <h2>Services</h2>
          <div class="boxes">
            <mat-checkbox>Password Reset ($39.99)</mat-checkbox><br>
            <mat-checkbox>Spyware Removal ($99.99)</mat-checkbox><br>
            <mat-checkbox>RAM Upgrade ($129.99)</mat-checkbox><br>
            <mat-checkbox>Software Installation ($49.99)</mat-checkbox><br>
            <mat-checkbox>Tune-up ($89.99)</mat-checkbox><br>
            <mat-checkbox>Keyboard Cleaning ($45.00)</mat-checkbox><br>
            <mat-checkbox>Disk Clean-up ($149.99)</mat-checkbox><br>
          </div>
        </section>

        <br>
        <section>
          <h4>Standard Fees</h4>
          <br>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Parts: </mat-label>
              <input matInput placeholder="Enter Value...">
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline">
              <mat-label>Labor: </mat-label>
              <input matInput placeholder="Hours of Labor @ $50.00/hr">
            </mat-form-field>
          </p>
        </section>
      </mat-card-content>

      <mat-card-actions class="frm-services-actions">
          <button mat-raised-button class="btn-primary" type="submit" [routerLink]="['../invoice-summary']">Calculate</button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>
  `,
  styles: [`
  `]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
