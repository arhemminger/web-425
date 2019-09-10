/*
============================================
; Title:  Bob's Computer Repair Shop
; Author: Professor Krasso
; Date:  8 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 9.3 - Bob's Computer Repair Shop
;===========================================
*/
import { Component } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = 39.99;
  spyware = 99.99;
  ram = 129.99;
  software = 49.99;
  tune = 89.99;
  keyboard = 45.00;
  disk = 149.99;

  title = 'hemminger-bobs-computer-repair-shop';

  /* need to link formData -> console error when importing angular forms "no provider for control container"
    return checked items to invoice
    total up checked items and return to invoice
  */
  onSubmit(formData) {
    alert('See the browser Console...');

    var total = 0;

    if (formData.checkGroup.password) {
      console.log('Password cost: ' + this.password);
      var total = total + this.password;
    }

    if (formData.checkGroup.spyware) {
      console.log('Spyware cost: ' + this.spyware);
      var total = total + this.spyware;
    }

    if (formData.checkGroup.ram) {
      console.log('RAM cost: ' + this.ram);
      var total = total + this.ram;
    }

    if (formData.checkGroup.software) {
      console.log('Software cost: ' + this.software);
      var total = total + this.software;
    }

    if (formData.checkGroup.tune) {
      console.log('Tune-up cost: ' + this.tune);
      var total = total + this.tune;
    }

    if (formData.checkGroup.keyboard) {
      console.log('Keyboard Cleaning cost: ' + this.keyboard);
      var total = total + this.keyboard;
    }

    if (formData.checkGroup.disk) {
      console.log('Disk cost: ' + this.disk);
      var total = total + this.disk;
    }

    console.log('Parts costs: ' + parseInt(formData.parts));
    console.log('Labor costs: ' + parseInt(formData.labor));
    var total = total + parseInt(formData.parts) + parseInt(formData.labor);
    console.log('Total costs: ' + total);

    document.getElementById("total").innerHTML = "$" + total;
  }
}
