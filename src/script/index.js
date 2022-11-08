'use strict';

/**
 * JavaScript Basics
 * Jodi-Ann Barrett
 * 
 * Responsive Design
 * */

// Utility Functions 
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}
