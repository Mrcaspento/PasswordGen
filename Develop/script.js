// Assignment Code
var generateBtn = document.querySelector("#generate");
var length
var caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
//Down below I have the user prompts asking the specifics of how long and how many charcters it will use, and character types
function userPrompts() {
  var length = prompt('How long do you want your password to be?'));
  var userInput = prompt('How many characters do you want your password to have?');
  var includeNumeric = confirm("Do you want to have numeric characters?");
  var includeCaps = confirm("Do you want to have capitalized charcters?");
  var includeAlpha = confirm("Do you want to have lower cased charcters?");
  var includeSpecial = confrim("Do you want to have special characters?");
  var passwordPrompts = {
    length: length,
    caps: includeCaps,
    numeric: includeNumeric,
    alpha: includeAlpha,
    special: includeSpecial
  }

  if (userInput < 8) {
    alert('Try again, It needs to be at least 8 characters.');
  };
  if (userInput >= 128) {
    alert('Try again, It needs to be less then 128 characters.');
  };
  
  for (var i = userInput; userInput < 8 || userInput > 128; userInput = prompt('how long do you want your password to be?')) {
    alert('Try again, It needs to be at least 8 charcters but less then 128 charcters.')
  };
  if (length > 128) {
    alert('Try again, It needs to be less then 128 characters.')
    return;
  };
  if (length < 8) {
    alert('Try again, It needs to be at least 8 charcters long.')
    return;
  };

  if(!includeSpecial && !includeNumeric && !includeAlpha && includeCaps){
    alert("Your password must contain at least one lowercase, uppercase, special, or numeric character");
    return;
  };

  return passwordPrompts;
}
function generatePassword(){special, alpha, numeric, Capital







}

////// come back and clean this up
// after these prompts comes the spec charcter prompts






// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +length 
};
console.log(writePassword());