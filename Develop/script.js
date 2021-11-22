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

//function to create password
function generatePassword() {
  length = prompt(
    "How long would you like your password to be? Please enter a number from 8 - 128."
  );

  if (length >= 8 && length <= 128) {
    alert("Thank you! Your password will be " + length + " characters long.");
  } else {
    alert("Invalid entry.");
    validateLength();
  }

  var isLowerCase = confirm("Lower case letters?");
  var isUpperCase = confirm("Upper case letters?");
  var isNumbers = confirm("Numbers?");
  var isSpcChar = confirm("Special characters?");

  var guaranteePassword = "";

  while (guaranteePassword.length <= length) {
    if (isLowerCase) {
      var randomLower = getRandomLower();
      guaranteePassword += randomLower;
    }
    if (isUpperCase) {
      var randomUpper = getRandomUpper();
      guaranteePassword += randomUpper;
    }
    if (isNumbers) {
      var randomNumber = getRandomNumber();
      guaranteePassword += randomNumber;
    }
    if (isSpcChar) {
      var specialChar = getSpecialChar();
      guaranteePassword += specialChar;
    }
  }
  console.log(guaranteePassword.length);
  console.log(guaranteePassword);

  return guaranteePassword
} //end generatePassword
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
