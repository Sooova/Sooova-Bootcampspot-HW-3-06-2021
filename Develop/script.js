// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passLength = 8,
  possiblecharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  password = "";
for (var i = 0, n = possiblecharacters.length; i < passLength; ++i) {
  password += possiblecharacters.charAt(Math.floor(Math.random() * n));
}
return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
