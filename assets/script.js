// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = ["!", "@", "#", "$", "%", "^", "&", "*"]
var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var userPickedCharacterSet = []
// Write password to the #password input
function writePassword() {
  //alert("working")
  var passwordLength = window.prompt("enter a number between 8 and 128")
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
    var isUpperCase = confirm("Do you want uppercase characters?")
    console.log(isUpperCase);
    var isNumber = confirm("Do you want numbers?")
    console.log(isNumber);
    var isLowerCase = confirm("Do you want lowercase characters?")
    console.log(isLowerCase);
    var isChars = confirm("Do you want special characters?")
    console.log(isChars);
    if (isUpperCase || isLowerCase || isNumber || isChars) {
      if (isUpperCase) {
        userPickedCharacterSet = userPickedCharacterSet.concat(upperC)
        if (isNumber) {
          userPickedCharacterSet = userPickedCharacterSet.concat(numb)
          if (isLowerCase) {
            userPickedCharacterSet = userPickedCharacterSet.concat(lowerC)
            if (isChars) {
              userPickedCharacterSet = userPickedCharacterSet.concat(chars)
              console.log(userPickedCharacterSet);
              for (var i = 0; i < passwordLength; i++)
                console.log("hello");
              var randomChars = userPickedCharacterSet[Math.floor(Math.random() * userPickedCharacterSet.length)]
              console.log(randomChars);
            }
          } else {
            console.log("Please pick at least 1 character set");
            writePassword();
          }
        }

      }
    }
  }
  var passwordInput = {
    passwordLength : passwordLength,
    isUpperCase : isUpperCase,
    isLowerCase : isLowerCase,
    isNumber : isNumber,
    isChars : isChars,
  };
  return passwordInput
  console.log("gotit");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return "hello"

}


//ask for length of password
  //prompt
  //save it to a variable
//check the length provided by the user is a number and in length between 8 and 128

//confirm : 4 for uppercase, lowercase, numbers, and special characters
  //save it to a variable
//check if uppercase or lowercase or num or spec charac is there
  // combine the confirmed arrays
//create an arry for uppercase letters, lowercase letters, numbers, and special characters. 4 total arrays
//create an array variable to have a new password with length provided by user. []
//random item from combined array and push it to new password array and do this step up to the length of user input