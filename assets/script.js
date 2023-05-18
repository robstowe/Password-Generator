// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// Add event listener to generate button


// why is it only using "deniuf" in only lowercase letters
function generatePassword() {

  var charSet = {
    useNumbers: "0123456789",
    useSpecChars: "!@#$%^&*",
    useLowerC: "abcdefghijklmnopqrstuvwxyz",
    useUpperC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };
  var PWLength = parseInt(prompt("Please enter a password length between 8 and 128 characters."));
  if (isNaN(PWLength) || PWLength < 8 || PWLength > 128) {
    alert("Password length must be atleast 8 characters.");
  };
  var useUpperC = confirm("Should the password include uppercase characters?");
  var useLowerC = confirm("Should the password include lowercase characters?");
  var useNumbers = confirm("Should the password include numbers?");
  var useSpecChars = confirm("Should the password include special characters?");

  if (!useUpperC && !useLowerC && !useNumbers && !useSpecChars) {
    alert("Make sure to select atleast 1 character type!");
    return;
  }
  var charSet = "";
  if (useLowerC) {
    charSet += charSet.useLowerC;
  }
  if (useUpperC) {
    charSet += charSet.useUpperC;
  }
  if (useNumbers) {
    charSet += charSet.useNumbers;
  }
  if (useSpecChars) {
    charSet += charSet.useSpecChars;
  }
  var password = "";
  for (var i = 0; i < PWLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password) {


    passwordText.value = password;
  }
}
generateBtn.addEventListener("click", writePassword);
