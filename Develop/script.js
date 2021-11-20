// Assignment code here
//Generators (from ASCII characters)
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
function generatePassword() {
  var length = prompt("How long would you like your password to be? Please enter a number from 8 - 128.");

  if (length >= 8 && length <= 128) {
    alert("Your password will be " + length + " characters long, thanks!");}
    else {
      alert("Invalid option, please try again!");}

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
