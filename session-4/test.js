function guess () {
    const LUCKY_NUMBER = 6;
    let count = 1
    var userGuess = document.getElementById("user-guess").value;
    const messageHTML = document.getElementById("message");

    if (userGuess < 1 || userGuess > 10) {
        messageHTML.innerHTML = "Please enter a number between 1 and 10";
    } else if (userGuess == LUCKY_NUMBER) {
        messageHTML.innerHTML = `Correct! You guess in ${count} attempts`;
        count = 1;
    } else if (userGuess != LUCKY_NUMBER) {
        messageHTML.innerHTML = `Incorrect! You guess in ${count} attempts`;
        count += 1;
    }
}

