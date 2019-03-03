function play(){
  clearErrors();
  let round = 1;
  let input = document.getElementById("input").value;
  validateInput(input);
  playGame(input, round);
  return false;
}

function clearErrors() {
    for (let i = 0;
        i < document.forms["luckySevens"].elements.length;
        i++) {
        if (document.forms["luckySevens"].elements[i]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["luckySevens"].elements[i]
               .parentElement.className = "form-group form-inline";
        }
    }
}

// function reset(){
//   // resets luckySevens.html, hiding results from previous trials and initializing variables
//   document.getElementById("results").style.display = "none";
//   document.getElementById("input").value = "";
//   clearErrors();
// }

function validateInput(input) {
  if(input < 0) {
    alert("The starting bet must be a positive number, with a value of at least 0.");
    document.forms["luckySevens"]["input"].parent543Element.className = "form-group form-inline has-error";
    document.getElementById("res")
    document.forms["luckySevens"]["input"].focus;
    return false;
  }
  if(input == "" || isNaN(input)) {
    alert("The value of the starting bet cannot be empty.");
    document.forms["luckySevens"]["input"].parentElement.className = "form-group form-inline has-error";
    document.forms["luckySevens"]["input"].focus;
    return false;
  }
  if(input.charAt(input.length - 3) != ".") {
    if (!(input.includes("."))) {
        return false;
    } else{
      alert("The starting bet must be a valid monetary amount")
      document.forms["luckySevens"]["input"].parentElement.className = "form-group form-inline has-error";
      document.forms["luckySevens"]["input"].focus;
      return false;
    }
  }

}

function playGame(gameMoney, round) {
  let maxValue = 0;
  let maxRound = 0;
  let oldGameMoney = gameMoney;
  if (oldGameMoney.includes(".") == false) {
    oldGameMoney = oldGameMoney + '.00';
  }
  while (gameMoney > 0 && round < 10000) {
    // let oldGameMoney = gameMoney;
    let die1 = Number(Math.floor(6*Math.random())) + Number(1);
    let die2 = Number(Math.floor(6*Math.random())) + Number(1);
    if (Number(die1) + Number(die2) == 7) {
      gameMoney = Number(gameMoney) + Number(4);
    } else {
      gameMoney = Number(gameMoney) + Number(-1);
    }
    if (gameMoney >= maxValue) {
      maxValue = gameMoney;
      maxRound = Number(round) + Number(1);
    }
    round += 1;
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerText = '$' + oldGameMoney;
  document.getElementById("totalRolls").innerText = round;
  document.getElementById("maxAmount").innerText = '$' + maxValue + '.00';
  document.getElementById("maxCount").innerText = maxRound;
  return false;
}

// function playRound(gameMoney) {
//   let die1 = Number(Math.floor(6*Math.random())) + Number(1);
//   let die2 = Number(Math.floor(6*Math.random())) + Number(1);
//   if (Number(die1) + Number(die2) == 7) {
//     gameMoney = Number(gameMoney) + Number(4);
//   } else {
//     gameMoney = Number(gameMoney) + Number(-1);
//   }
//   return gameMoney;
// }
