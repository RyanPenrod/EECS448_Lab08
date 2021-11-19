function validatePassword(){
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var message = document.getElementById("message");

  //clear the error message each time they enter a password
  document.getElementById("message").innerHTML = "";

  if(pass1 != pass2){
    message.textContent += "The Passwords You Provided do not Match.";
  }
  else if(pass1.length < 8){
    message.textContent += "The Password You Provided is too Short, must be at least 8 characters long.";
  }
  else{
    message.textContent += "Your Password Has Been Validated.";
  }
}
