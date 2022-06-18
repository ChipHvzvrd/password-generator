// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordInput = document.querySelector("#passwordInput");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = document.getElementById("password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("password").value = password;
}

function passwordCriteria(){
  document.getElementById("criteria").style.visibility = "visible";
  
}

function checkPassword(inputtxt){
  var passInput = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputtxt.value.match(passInput)){
    alert("Password Confirmed")
    return true;
  }
  else{
    alert("Incorrect Criteria Try Again...")
    return false;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", passwordCriteria);
//passwordInput.addEventListener("click", checkPassword);

