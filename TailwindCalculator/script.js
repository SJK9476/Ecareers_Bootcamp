function add() {
  let input1 = Number(document.getElementById("firstNumber").value);
  let input2 = Number(document.getElementById("secondNumber").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 + input2;
    result = result.toFixed(3);
    document.getElementById("calc-result").innerHTML = result;
    
  }
}

function subtract() {
  let input1 = Number(document.getElementById("firstNumber").value);
  let input2 = Number(document.getElementById("secondNumber").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 - input2;
    result = result.toFixed(3);
    document.getElementById("calc-result").innerHTML = result;
    
  }
}

function multiply() {
  let input1 = Number(document.getElementById("firstNumber").value);
  let input2 = Number(document.getElementById("secondNumber").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 * input2;
    result = result.toFixed(3);
    document.getElementById("calc-result").innerHTML = result;
    
  }
}

function divide() {
  let input1 = Number(document.getElementById("firstNumber").value);
  let input2 = Number(document.getElementById("secondNumber").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 / input2;
    result = result.toFixed(3);
    document.getElementById("calc-result").innerHTML = result;
    
  }
}

function reset() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("calc-result").innerHTML = "";
}

function automaticReset() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
}
