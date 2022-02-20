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

// create password
function generatePassword() {

  // change to array 
var randomPassword = lowerCase.concat(upperCase, passwordNumbers, specialCharacters);  // msg = ''  // msg2 = []

  var passwordLength = window.prompt("Please enter how many characters you would like to have, between 8 and 128.");
  if (passwordLength >= 8 || passwordLength <= 128) {
    if (passwordLength < 8 || passwordLength >128) {
      window.alert("Password must be between 8-128 characters!");
      window.prompt("Please enter how many characters you would like to have, between 8 and 128.");
    }
  }
  var lcConfirm = window.confirm("Would you like to add lower case letters?");
  if (lcConfirm) {
    randomPassword += lowerCase;
  }
  var upConfirm = window.confirm("Would you like to add upper case letters?");
  if (upConfirm) {
    randomPassword += upperCase;
  }
  var pnConfirm = window.confirm("Would you like numbers?");
  if (pnConfirm) {
    randomPassword += passwordNumbers;
  }
  var scConfirm = window.confirm("Would you like to add special characters?");
  if (scConfirm) {
    randomPassword += specialCharacters;
  }

if (lowerCase) {
  randomPassword = randomPassword.concat(lowerCase);
}
if (upperCase) {
  randomPassword = randomPassword.concat(upperCase);
}
if (passwordNumbers) {
  randomPassword = randomPassword.concat(passwordNumbers);
}
if (specialCharacters) {
  randomPassword = randomPassword.concat(specialCharacters);
}
console.log(passwordLength, 'int')
// passwordLength is a string 
// randomPassword
console.log(randomPassword, typeof randomPassword)
for (var i = 0; i < passwordLength; i++) {
  passwordLength = (Math.floor(Math.random() * (26 - 0) + 0));
}
return randomPassword;
};