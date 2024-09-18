function add() {
  let input1 = Number(document.getElementById("first-number").value);
  let input2 = Number(document.getElementById("second-number").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 + input2;
    document.getElementById("result").innerHTML = result;
    // document.getElementById("first-number").value = "";
    // document.getElementById("second-number").value = "";
  }
}

function subtract() {
  let input1 = Number(document.getElementById("first-number").value);
  let input2 = Number(document.getElementById("second-number").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 - input2;
    document.getElementById("result").innerHTML = result;
    // document.getElementById("first-number").value = "";
    // document.getElementById("second-number").value = "";
  }
}

function multiply() {
  let input1 = Number(document.getElementById("first-number").value);
  let input2 = Number(document.getElementById("second-number").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 * input2;
    document.getElementById("result").innerHTML = result;
    // document.getElementById("first-number").value = "";
    // document.getElementById("second-number").value = "";
  }
}

function divide() {
  let input1 = Number(document.getElementById("first-number").value);
  let input2 = Number(document.getElementById("second-number").value);

  if (input1 == "" || input2 == "") {
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  } else {
    let result = input1 / input2;
    document.getElementById("result").innerHTML = result;
    // document.getElementById("first-number").value = "";
    // document.getElementById("second-number").value = "";
  }
}

function reset() {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  document.getElementById("result").innerHTML = "";
}
