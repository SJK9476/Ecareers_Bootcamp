const ADD_BUTTON = document.getElementById("Add");

ADD_BUTTON.addEventListener("click", add);

function add() {
  let input1 = Number(document.getElementById("input1").value);
  let input2 = Number(document.getElementById("input2").value);

  let result = input1 + input2;

  document.getElementById("result").innerHTML = '';

  document.getElementById("result").innerHTML += result;
}

add(2,3);