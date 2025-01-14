function flipCoin() {
  const nom = Math.random();
  console.log(nom);
  console.log(Math.round(nom));

  let flip = "";
  if (Math.round(nom) === 0) {
    flip = "Heads";
  } else {
    flip = "Tails";
  }
  return flip;
}

console.log(flipCoin());

function result(player) {
  const flip = flipCoin();
  let resultmessage = "";

  if (player === flip) {
    resultmessage = `
            <p class="text-lg text-green-500 font-semibold">Computer chose <span class="font-bold">${flip}</span>. You chose <span class="font-bold">${player}</span>.</p>

      <p class="text-green-500 text-xl">You win!</p>`;
  } else {
    resultmessage = ` <p class="text-lg text-red-500 font-semibold">Computer chose <span class="font-bold">${flip}</span>. You chose <span class="font-bold">${player}</span>.</p>
      <p class="text-red-500 text-xl">You lose.</p>`;
  }
  document.querySelector(".result").innerHTML = resultmessage;

  console.log(flipCoin());

  console.log(resultmessage);
}



function reset(){
    document.querySelector(".result").innerText = "";
}