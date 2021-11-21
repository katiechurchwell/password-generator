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
//END GENERATORS

//VALIDATIONS
//validate length
function validateLength() {
  var length = prompt(
    "How long would you like your password to be? Please enter a number from 8 - 128."
  );

  if (length >= 8 && length <= 128) {
    alert("Thank you! Your password will be " + length + " characters long.");
    return length;
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
  return lowerCase;
}

//validate upper case
function validateUpperCase() {
  var upperCase = window.confirm(
    "Would you like UPPER case letters? Please select Ok for yes and Cancel for no."
  );
  return upperCase;
}

//validate numbers
function validateNumbers() {
  var number = window.confirm(
    "Would you like numbers? Please select Ok for yes and Cancel for no."
  );
  return number;
}


//validate special characters
function validateSpecialChar() {
  var specialChar = window.confirm(
    "Would you like special characters? Please select Ok for yes and Cancel for no."
  );
  return specialChar;
}
//END VALIDATIONS

//Generate Password
function generatePassword() {
  var length = validateLength();
  var isLowerCase = validateLowerCase();
  var isUpperCase = validateUpperCase();
  var isNumber = validateNumbers();
  var isSpecialChar = validateSpecialChar();

  
  function lowerCase() {
    if (isLowerCase) {
    return getRandomLower();
  }}

  function upperCase() {
    if (isUpperCase) {
    return getRandomUpper();
  }}

  function number() {
    if (isNumber);
    return getRandomNumber();
  }

  function specialChar() {
  if (isSpecialChar) {
    return getSpecialChar();
  }}

  let chosenPassword = '';

  console.log(chosenPassword.concat(lowerCase(),upperCase(),number(),specialChar()));
  
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
