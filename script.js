// 1. PROMPT USER FOR PASSWORD CRITERIA
//  - PASSWORD LENGTH MUST BE 8-128 CHARACTERS
//  - PROMPT USER IF THEY WANT TO INCLUDE LOWERCASE, UPPERCASE, SYMBOLS, AND SPECIAL CHARACTERS
// 2. VALIDATE THE INPUT
// 3. GENERATE THE PASSWORD

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log("Clicked button");
  //PROMPT for character length
  var passwordLength = prompt(
    "Enter your password length from 8 to 128 characters."
  );
  // convert string to number
  passwordLength = parseInt(passwordLength);

  if (!passwordLength) {
    // if something non-numerical is entered as a password length
    alert("Please enter a valid number.");
  } else if (parseInt(passwordLength) < 8) {
    // if something less than 8 is entered
    alert("Password length must be at least 8 characters.");
    generatePassword();
  } else if (parseInt(passwordLength) > 128) {
    // if something more than 128 is entered
    alert("Password length must be less than 129 characters.");
    generatePassword();
  } else {
    var hasLowercase = confirm("Click OK to add lowercase letters");
    var hasUppercase = confirm("Click OK to add Uppercase letters");
    var hasNumbers = confirm("Click OK to add Numbers");
    var hasSpecialCharacters = confirm("Click OK to add Special Characters");
    var selectedOptions = [];
    var password = "";

    if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecialCharacters) {
      alert("We cannot make a password with no selected characters");
      generatePassword();
    }

    if (hasLowercase) {
      selectedOptions.push(...lowerCasedCharacters);
    }

    if (hasUppercase) {
      selectedOptions.push(...upperCasedCharacters);
    }

    if (hasNumbers) {
      selectedOptions.push(...numericCharacters);
    }

    if (hasSpecialCharacters) {
      selectedOptions.push(...specialCharacters);
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * selectedOptions.length);
      var randomChar = selectedOptions[randomNumber];
      password = password + randomChar;
    }

    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  " ",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
