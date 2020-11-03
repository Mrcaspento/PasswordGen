// Assignment Code
var generateBtn = document.getElementById("generate");
var length
var caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passwordOptions = [];
var characterCheck = []
var passwordText = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
};


function getLength() {
  var length = parseInt(prompt('How long do you want your password to be?'));
  if (length > 7 && length < 129) {
    userPrompts(length)
  }
  else { // this is incase the user doesnt pick a charcter limit between 8-128
    alert("not the right length")
    getLength()
  }
}
function userPrompts(length) {
  passwordOptions = [];
  characterCheck = []
  // user prompts
  if (confirm("Do you want to have numeric characters?")) {
    passwordOptions.push(numeric) //each confirm adds the array chosen to parent array
    characterCheck.push(numeric[Math.floor(Math.random()*numeric.length)]) // takes the user input of length and 
  }
  if (confirm("Do you want to have capitalized charcters?")) {
    passwordOptions.push(caps)
    characterCheck.push(caps[Math.floor(Math.random()*caps.length)])
  }
  if (confirm('Do you want to have lower cased charcters?')) {
    passwordOptions.push(alpha)
    characterCheck.push(alpha[Math.floor(Math.random()*alpha.length)])
  }
  if (confirm('Do you want to have special characters?')) {
    passwordOptions.push(special)
    characterCheck.push(special[Math.floor(Math.random()*special.length)])
  }
  if (passwordOptions.length !== 0 ) {
    generatePassword(length)
  } else {
    alert("you must select one character type")
    userPrompts(length)
  }
}
function generatePassword(length) { // this function is created after the user selects wwhat kind of charcters they want in the password
  var pass =[] // is the random password that was generated from the prompts
  for (let i = 0; i < length; i++) {
    
    var randType = passwordOptions[Math.floor(Math.random()*passwordOptions.length)] //this function takes the arrays goes through the index
    var character = randType[Math.floor(Math.random()*randType.length)]
    pass.push(character)
  }
  for (let i = 0; i < characterCheck.length; i++){
    pass[i] = characterCheck[i]
  }
  pass = pass.join("")// here i have the password pushed in the text box with out "," in between each variable
  passwordText.value = pass;
}
generateBtn.addEventListener("click", getLength);