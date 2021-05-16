const y = document.getElementById("y");
const n = document.getElementById("n");

y.onclick = () => alert("You lose! 😭");
n.onclick = () => {
  alert("You win! 😳");

  let n = "";

  do {
    n = prompt("Enter your name for the Leaderboard:");
  } while (!n.length);

  const p = document.createElement("p");
  p.innerText = `theres no leaderboard ${n}`;
  p.classList.add("leaderboard");

  const img = document.createElement("img");
  img.classList.add("image");
  img.src =
    "https://www.pinclipart.com/picdir/middle/524-5244982_lmao-emoji-png-clipart-open-eye-crying-laughing.png";

  document.body.innerHTML = "";
  document.body.appendChild(p);
  document.body.appendChild(img);
};
