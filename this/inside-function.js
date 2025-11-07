"use strict"
function x(){
    console.log(this);
}

window.x();

// In strict mode, the value of 'this' inside a function remains 'undefined'.
// JavaScript does NOT replace 'this' with the global object in strict mode.
// In non-strict mode, the value of 'this' becomes the global object (window in browsers).
// This difference exists because of a concept called "this substitution".
// According to this substitution, if 'this' is 'undefined' or 'null',
// JavaScript replaces it with the global object,
// but this automatic replacement happens ONLY in non-strict mode,
// and STRICT MODE disables this substitution.
