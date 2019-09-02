/*
============================================
; Title:  Server-Side Communications with Node.js and Express
; Author: Professor Krasso
; Date:  1 September 2019
; Modified by: Andrew Hemminger
; Description: Assignment 8.2 - Server-Side Communications with Node.js and Express
;===========================================
*/
import * as express from "express";

const app = express();

interface Composer {
  id: number,
  firstName: string,
  lastName: string
}

// Composer value array
const composers: Composer[] = [
  { id: 1, firstName: "Johann", lastName: "Bach"},
  { id: 2, firstName: "Wolfgang", lastName: "Mozart"},
  { id: 3, firstName: "Ludwig", lastName: "Beethoven"},
  { id: 4, firstName: "Giuseppe", lastName: "Verdi"},
  { id: 5, firstName: "Frederic", lastName: "Chopin"}
];

// Function returning list of composers
function getComposers(): Composer[] {
  return composers;
}

app.get('/', (request, response) => {
  response.send('The URL for composers is http://localhost:3000/api/composers');
});

app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

// Function returning composer from list by the id field
function getComposerById(composerId: number): Composer {
  return composers.find(c => c.id == composerId);
}

// error was being thrown over string so added parseInt function
app.get('/api/composer/:id', (request, response) => {
  response.json(getComposerById(parseInt(request.params.id)));
});

const server = app.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
