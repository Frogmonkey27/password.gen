var generateBtn = document.querySelector("#generate");

// This function writes the generated password to the password text box
function writePassword() {
// Call the generatePassword function to generate the password
var password = generatePassword();
// Select the password text box
var passwordText = document.querySelector("#password");
// Set the value of the password text box to the generated password
passwordText.value = password;
}

// Add event listener to the generate button
generateBtn.addEventListener("click", writePassword);

// This function generates the password based on user input
function generatePassword() {
// Prompt the user for the desired length of the password
var passwordLength = prompt("How many characters would you like your password to be? (Enter a number between 8 and 128)");
passwordLength = parseInt(passwordLength);

// Check if the password length is valid
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
passwordLength = prompt("Please enter a valid number between 8 and 128");
passwordLength = parseInt(passwordLength);
}

// Prompt the user for the character types to include in the password
var includeLowercase = confirm("Do you want to include lowercase letters in your password?");
var includeUppercase = confirm("Do you want to include uppercase letters in your password?");
var includeNumeric = confirm("Do you want to include numbers in your password?");
var includeSpecial = confirm("Do you want to include special characters in your password?");

// Build the character set based on the user input
var characterSet = "";

if (includeLowercase) {
characterSet += "abcdefghijklmnopqrstuvwxyz";
}
if (includeUppercase) {
characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includeNumeric) {
characterSet += "0123456789";
}
if (includeSpecial) {
    characterSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }  

// Generate the password based on the character set and password length
var password = "";

for (var i = 0; i < passwordLength; i++) {
var randomIndex = Math.floor(Math.random() * characterSet.length);
password += characterSet[randomIndex];
}

// Return the generated password
return password;
}



