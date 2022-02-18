// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

var numbers = "0-9";
var lowerCase = "a-z";
var upperCase = "A-Z";
var specialCharacters = "!@#$%^&*()?"; 

var generatePassword = function() {
    var length = window.prompt("How many characters would you like?"); {
        var passWordLength = {
          from:8,
          to: 128,
        }
        console.log(passWordLength);
    };

    var lowerCase = window.prompt("Would you like to add lowercase letters?");
    if (lowerCase === "yes") {
      lowerCase = () => {
      }
      return this.lowerCase;
    };
    var upperCase = window.prompt("Would you like to add uppercase letters?");
    if (upperCase === "yes") {
      return upperCase; 
    }if (upperCase === "no"){
      return numbers
    };
    var numbers = window.prompt("Would you like to add numbers?");
    if (numbers === "yes") {
      return numbers
    }if (numbers === "no") {
      return specialCharacters
    };
    var specialCharacters = window.prompt("Would you like to add special characters?");
    if (specialCharacters === "yes") {
      return specialCharacters 
    } if (specialCharacters === "no") {
      return writePassword
    };
};