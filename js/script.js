// Copyright Rory Mackay
// Created by: Rory Mackay
// Date: March 2022
// This file contains the JS functions for the index.html file

"use strict"

// declare constants
const TAX_BRACKET = 0.1805

/**
 * This function calculates area and perimeter of rectangle.
 */
function payClicked () {
  // get user input
  let hours = parseFloat(document.getElementById('hours').value)
  let rate = parseFloat(document.getElementById('rate').value)

  // calculate the pay and the tax
  let total_pay = hours * rate
  let tax = TAX_BRACKET * total_pay
	let total_earned = total_pay - tax 

  // display the results
  document.getElementById('total-earned').innerHTML = "After tax, your pay will be $" + total_earned.toFixed(2)
  document.getElementById('tax').innerHTML = "At least we have free healthcare, because the government will steal $" + tax.toFixed(2)
}