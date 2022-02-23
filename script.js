    // 1. PROMPT USER FOR PASSWORD CRITERIA
    //  - PASSWORD LENGTH MUST BE 8-128 CHARACTERS
    //  - PROMPT USER IF THEY WANT TO INCLUDE LOWERCASE, UPPERCASE, SYMBOLS, AND SPECIAL CHARACTERS
    // 2. VALIDATE THE INPUT
    // 3. GENERATE THE PASSWORD

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Clicked button")
  //PROMPT for character length
  passwordLength = window.prompt("Enter your password length from 8 to 128 characters.")
  // convert string to number
  passwordLength = parseInt(passwordLength)

  if (!(passwordLength)) {  // if something non-numerical is entered as a password length 
    alert("Please enter a valid number.");
    return;
  } else if (parseInt(passwordLength) < 8) { // if something less than 8 is entered
    alert("Password length must be at least 8 characters.");
    return;
  } else if (parseInt(passwordLength) > 128) { // if something more than 128 is entered 
    alert("Password length must be less than 129 characters.")
    return;
  }
  else {
    var hasLowercase = confirm("Click OK to add lowercase letters");
    var hasUppercase = confirm("Click OK to add Uppercase letters");
    var hasNumbers = confirm("Click OK to add numbers");
    var hasSpecialCharacters = confirm("Click OK to add Special Characters");
  };
  console.log(hasLowercase);
  console.log(hasUppercase);
  console.log(hasNumbers);
  console.log(hasSpecialCharacters);


    // 4. DISPLAY THE GENERATED PASSWORD ON PAGE
  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//ARRAY of special characters
specialCharacters = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

//ARRAY of numeric characters
numericCharacters = ["1234567890"]

//ARRAY of uppercase characters
uppercaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//ARRAY of lowercase characters
lowercaseCharacters = ["abcdefghijklmnopqrstuvwxyz"]