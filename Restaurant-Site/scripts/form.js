function validateInput() {
  let name = document.getElementById("name").innerText;
  let email = document.getElementById("email").innerText;
  let number = document.getElementById("number").innerText;


  if(name == "") {
    document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
    return false;
  }
  if(email == "") {
    document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
    return false;
  }
  if(number == "" || isNaN(number) == true) {
      document.forms["contactForm"]["number"].parentElement.className = "form-group has-error";
      return false;
    }
  }


  document.getElementById("formResponse").style.display = "block";
  document.getElementById("inputForm").style.display = "none";
  return false;
}
