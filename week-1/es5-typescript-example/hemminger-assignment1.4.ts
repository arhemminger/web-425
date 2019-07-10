/*
============================================
; Title:  TypeScript
; Author: Professor Krasso
; Date:   9 July 2019
; Modified By: Andrew Hemminger
; Description: Assignment 1.4 - TypeScript
;===========================================
*/

// declaring variables
let firstname: string = 'Andrew';
let lastname: string = 'Hemminger';

// myName function
function myName (firstname, lastname) {
    return 'Hi ' + firstname + ' ' + lastname;5
}

// output
console.log(myName(firstname, lastname));