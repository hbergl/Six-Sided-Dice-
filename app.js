const dice = document.getElementById("dice");

dice.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  document.getElementById("result").innerHTML = randomNumber;
  console.log(randomNumber);
});
