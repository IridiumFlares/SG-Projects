function clearErrors() {
    for (let loopCounter = 0;
        loopCounter < document.forms["displayEvens"].elements.length;
        loopCounter++) {
        if (document.forms["displayEvens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["displayEvens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
  clearErrors();
  document.getElementById("min").value = "";
  document.getElementById("max").value = "";
  document.getElementById("stepsize").value = "";
  document.getElementById("results").value = "";
  document.getElementById("displayResults").style.display = "none";
  document.getElementById("submitButton").innerText = "Display Evens";
}

function increment() {

  let min = document.getElementById("min").value;
  let temp = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let stepsize = document.getElementById("stepsize").value;
  // let interval = setInterval(function() {
  //   update(temp);
  //   if (temp >= max) {
  //     clearInterval(interval);
  //     // update(max);
  //   }
  // }, 500);
  let list = [];

  while (temp <= max) {

    if(temp % 2 == 0){
      list.push(temp);
    }
    temp = Number(temp) + Number(stepsize);
  }

  for (var i = 0; i < list.length; i++) {
    let node = document.createElement("p");
    let text = document.createTextNode(list[i]);
    node.appendChild(text);
    document.getElementById("results").appendChild(node);
  }

  // function update(temp) {
  //   if (temp % 2 == 0) {
  //     let node = document.createElement("p");
  //     let textNode = document.createTextNode(temp);
  //     console.log(temp);
  //     node.appendChild(textNode);
  //     document.getElementById("results").appendChild(node);
  //
  //     temp = stepsize + temp;
  //   } else {
  //     temp = temp + stepsize;
  //   }
  //
  // }
}

function validateItems() {
  let min = document.getElementById("min").value;
  let max = document.getElementById("max").value;
  let stepsize = document.getElementById("stepsize").value;

  if (min == "" || isNaN(min)) {
    alert("The starting position must be filled in with a number.");
    document.forms["displayEvens"]["min"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["min"].focus();
    return false;
  }

  if (max == "" || isNaN(max)) {
    alert("The ending position must be filled in with a number.");
    document.forms["displayEvens"]["max"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["max"].focus();
    return false;
  }

  if (stepsize == "" || isNaN(stepsize)) {
    alert("The stepsize must be filled in with a number.");
    document.forms["displayEvens"]["stepsize"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["stepsize"].focus();
    return false;
  }

  if (min > max) {
    alert("The maximum value must be larger than the minimum.");
    document.forms["displayEvens"]["min"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["max"].focus();
    return false;
  }

  if (stepsize <= 0) {
    alert("Stepsize must be a positive integer.");
    document.forms["displayEvens"]["stepsize"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["stepsize"].focus();
    return false;
  }

  if (stepsize >= (max - min)) {
    alert("Select a smaller interval for stepsize.");
    document.forms["displayEvens"]["stepsize"].parentElement.className = "form-group has-error";
    document.forms["displayEvens"]["stepsize"].focus();
    return false;
  }

  document.getElementById("displayResults").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  document.getElementById("minresult").innerText = min;
  document.getElementById("maxresult").innerText = max;
  document.getElementById("stepsizeresult").innerText = stepsize;
  increment();

  return false;
}
