let card1el = document.getElementById("card1");
let card2el = document.getElementById("card2");
let sumel = document.getElementById("sum");
let resultel = document.getElementById("result");

function startGame() {
    let card1 = Math.floor(Math.random() * 11)+1;
    let card2 = Math.floor(Math.random() * 11)+1;
    let sum = card1 + card2;
    let result
    card1el.innerHTML = "First Card: " + card1;
    card2el.innerHTML = "Second Card: " + card2;
    sumel.innerHTML = "Sum: " + sum;
    if (sum > 21) {
        result = `Sum Of Cards is = ${sum} You are safe 😅`;
    }
    else if (sum === 21) {
        result = `Sum Of Cards is = ${sum} "You win 🤩"`;
    }

    else {
        result = `Sum Of Cards is = ${sum} You lose! 😭`;
    }
    resultel.innerHTML = result;
}

function Reset() {
    card1el.innerHTML = "First Card: ";
    card2el.innerHTML = "Second Card: ";
    sumel.innerHTML = "Sum: ";
    resultel.innerHTML = "Result: ";
}