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
  selector: 'app-invoice-summary',
  template: `
  <!-- Invoice Summary Card -->
  <div class="wrapper">
      <div class="frm-services">
        <mat-card >
          <mat-card-header class="center">
              <mat-card-title class="center">Invoice Summary</mat-card-title>
          </mat-card-header>
          <mat-card-content class="frm-services-body">
            <section>
              <h4>Bob's Computer Repair Shop</h4>
              <p>Date: 09/08/2019</p>

              <!-- Invoice List -->
              <div class="list">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Password Reset ($39.99)
                      <span class="badge badge-secondary badge-pill">1</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Spyware Removal ($99.99)
                      <span class="badge badge-secondary badge-pill">1</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Ram Upgrade ($129.99)
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Software Installation ($49.99)
                      <span class="badge badge-secondary badge-pill">1</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Tune-up ($89.99)
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Keyboard Cleaning ($45.00)
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Disk Clean-up ($149.99)
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Parts:
                      <span class="badge badge-secondary badge-pill">$49.99</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      # of Labor Hours:
                      <span class="badge badge-secondary badge-pill">2</span>
                    </li>
                  </ul>
                </div>

                <!-- Total -->
                <br>
                <div>
                  <h4>Total: <span><p style="text-align: right; font-size: 20px; color: blue;">$339.96</p></span></h4>
                </div>
            </section>
          </mat-card-content>
          <!-- Buttons Cancel and Print -->
          <mat-card-actions class="frm-services-actions">
              <button mat-raised-button class="btn-secondary" type="submit" [routerLink]="['../']">Close</button>
              <button mat-raised-button class="btn-primary" type="print">Print</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
`,
styles: [`
`]
})
export class InvoiceSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
