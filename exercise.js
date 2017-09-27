//Grabbed these exercises from W3

//Exercise 1: Write a JS program to test the first char of a string is uppercase or not
function upper_case(str) {
  var regexp = /^[A_Z]/;
  if (regexp.test(str)) {
    console.log("string's first char is uppercase");
  } else {
    console.log("string's first char is not uppercase");
  }
}
