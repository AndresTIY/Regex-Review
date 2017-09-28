//Grabbed these exercises from W3

//Exercise 1: Write a JS program to test the first char of a string is uppercase or not
function upper_case(str) {
  var regexp = /^[A_Z]/;
  //^ matches the position at the beg of the input string
  if (regexp.test(str)) {
    console.log("string's first char is uppercase");
  } else {
    console.log("string's first char is not uppercase");
  }
}

// Exercise 2: Write a JS program to check a credit card number (format 9999-9999-9999-9999)

function is_creditCard(str) {
  var regexp = /(\d{4}[-]){3}\d{4}$/g;
  //\d matches a digit char
  //{4} matches exactly 4 times
  //[-] matches -
  // (\d{4[-]){3} means 4 digits and a - char 3 times
  // $ means end of string or end of line
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

// Exercise 3: Write a pattern that matches email addresses.
// - Uppercase (A-Z) and lowercase (a-z) English letters.
// - Digits (0-9).
// - Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// - Character . ( period, dot or fullstop)
// provided that it is not the first or last character
// and it will not come one after the other.

// email: user@example.com
// user can be any num of chars, upper and lower case

function valid_email(str) {
  var mailformat = /^[a-zA-Z]{1,}[0-9]?([\.\_-]?[a-zA-Z0-9]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailformat.test(str)) {
    console.log("Valid email address!");
  } else {
    console.log("Invalid");
  }
}
