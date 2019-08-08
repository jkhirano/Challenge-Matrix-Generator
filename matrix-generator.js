"use strict";

function matrixGenerator(rows, columns) {
  // do work here

  let final = [];

  for (x = 0; x < rows; x++) {
    let columnArr = [];

    for (y = 0; y < columns; y++) {
      // needs to be random num 1 - 100
      columnArr.push(Math.floor(Math.random * 101));
      // sort array
      columnArr.sort();
    }
    final.push(columnArr);
  }
  return final;
}

module.exports = matrixGenerator;
