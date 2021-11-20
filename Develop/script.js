// Assignment code here
//Generators (from ASCII characters)
//Lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}
//Upper case
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}
//Numbers
function getRandomNumber(){
  return (Math.floor(Math.random() * 10));
}

//Special Characters
function getSpecialChar() {
  var specialCharacter = "!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  return specialCharacter.substr(Math.floor(specialCharacter.length * Math.random()), 1);
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
