// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// Password Arrays
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

function generatePassword() {
  var passwordLength = window.prompt("Please enter how many characters you would like to have, between 8 and 128.");
  while (passwordLength >= 8 || passwordLength <= 128)
  var lowerCase = window.confirm("Would you like to add lower case letters?")
  var upperCase = window.confirm("Would you like to add upper case letters?")
  var passwordNumbers = window.confirm("Would you like numbers?")
  var specialCharacters = window.confirm("Would you like to add special characters?")

var getOptions = []

if (lowerCase === true) {
  randomPassword = randomPassword.concat(lowerCase);
}
if (upperCase === true) {
  randomPassword = randomPassword.concat(upperCase);
}
if (passwordNumbers === true) {
  randomPassword = randomPassword.concat(passwordNumbers);
}
if (specialCharacters === true) {
  randomPassword = randomPassword.concat(specialCharacters);
}
var randomPassword = []

for (var i = 0; i < randomPassword; i++) {
  randomPassword = randomPassword + getOptions[Math.floor(Math.random() * getOptions.length)];
}
};