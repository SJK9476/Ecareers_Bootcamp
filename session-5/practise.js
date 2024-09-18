let namesArray = [];

let nameInput = document.getElementById("name");
let nameOutput = document.getElementById('output');

let addName = () => namesArray.push(nameInput.value);

function showNames () {
    namesArray.forEach((name) => {
        nameOutput.innerHTML += `<li>${name}</li>`
    })
}

