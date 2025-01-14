function flipCoin() {
  const nom = Math.random();
  console.log(nom);
  console.log(Math.round(nom));

  let result = "";
  if (Math.round(nom) === 0) {
    result = "Heads";
  } else {
    result = "Tails";
  }

  document.querySelector(".result").innerText = result;
  console.log(result);
}


function reset(){
    document.querySelector(".result").innerText = "";
}