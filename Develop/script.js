// Assignment code here
//RANDOM GENERATORS (from ASCII characters)
//Lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Upper case
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Numbers
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

//Special Characters (note for me: the 1 in substr method is length of return)
function getSpecialChar() {
  var specialCharacter = "!”#$%&’()*+,-./:;<=>?@[]^_`{|}~";
  return specialCharacter.substr(
    Math.floor(specialCharacter.length * Math.random()),
    1
  );
}

//Generate Password
//need generatePassword function

//VALIDATIONS
function validateLength() {
  //validate length
  var length = prompt(
    "How long would you like your password to be? Please enter a number from 8 - 128."
  );

  if (length >= 8 && length <= 128) {
    alert("Thank you! Your password will be " + length + " characters long.");
    validateLowerCase();
  } else {
    alert("Invalid entry.");
    validateLength();
  }
}

//validate lower case
function validateLowerCase() {
  var lowerCase = window.confirm(
    "Would you like lower case letters? Please select Ok for yes and Cancel for no."
  );
  if ((lowerCase = true)) {
    alert("Your password will include lower case letters.");
  } else if ((lowerCase = false)) {
    alert("Your password will not include lower case letters.");
  } else {
    alert("Invalid entry.");
    validateLowerCase();
  }
}

//validate upper case
function validateUpperCase() {
  var upperCase = window.confirm(
    "Would you like upper case letters? Please select Ok for yes and Cancel for no."
  );
  if ((upperCase = true)) {
    alert("Your password will include upper case letters.");
  } else if ((upperCase = false)) {
    alert("Your password will not include upper case letters.");
  } else {
    alert("Invalid entry.");
    validateUpperCase();
  }
}

//validate special characters 
function validateSpecialChar() {
  var specialChar = window.confirm(
    "Would you like special characters? Please select Ok for yes and Cancel for no."
  );
  if ((specialChar = true)) {
    alert("Your password will include special characters.");
  } else if ((specialChar = false)) {
    alert("Your password will not include special characters.");
  } else {
    alert("Invalid entry.");
    validateSpecialChar();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password textbox
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
