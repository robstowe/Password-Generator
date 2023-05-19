
var generateBtn = document.querySelector("#generate");



function generatePassword() {
// array to house the character sets used to determine where we will be pulling the unique characters from
  var charSets = {
    useNumbers: "0123456789",
    useSpecChars: "!@#$%^&*",
    useLowerC: "abcdefghijklmnopqrstuvwxyz",
    useUpperC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };
  // this determines the password length, and ParseINT confirms the users input to the closest integer
  var PWLength = parseInt(prompt("Please enter a password length between 8 and 128 characters."));
  //checks to determine that PW length is a number, is atleast 8, or atleast 128
  if (isNaN(PWLength) || PWLength < 8 || PWLength > 128) {
    alert("Password length must be atleast 8 characters.");
  };

  //user prompts to confirm asking if they would like to use the following character sets
  var useUpperC = confirm("Should the password include uppercase characters?");
  var useLowerC = confirm("Should the password include lowercase characters?");
  var useNumbers = confirm("Should the password include numbers?");
  var useSpecChars = confirm("Should the password include special characters?");

  //if statements to confirm that the user selected atleast one of those character types "!(if False)"
  if (!useUpperC && !useLowerC && !useNumbers && !useSpecChars) {
    alert("Make sure to select atleast 1 character type!");
    return;
  }
  //var character set to string together a random set of keys based on the charSets variable on line 8
  var charSet = "";
  //if statements to connect that if a user used lowerC, etc and tying that back to the charSets variable
  if (useLowerC) {
    charSet += charSets.useLowerC;
  }
  if (useUpperC) {
    charSet += charSets.useUpperC;
  }
  if (useNumbers) {
    charSet += charSets.useNumbers;
  }
  if (useSpecChars) {
    charSet += charSets.useSpecChars;
  }
  // console.log(charSet);
  var password = "";

  //for loop to loop the pw characters and to meet the required PWLength request
  for (var i = 0; i < PWLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(password);
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
