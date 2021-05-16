const y = document.getElementById("y");
const n = document.getElementById("n");

y.onclick = () => alert("You lose! 😭");
n.onclick = () => {
  alert("You win! 😳");

  let n = "";

  do {
    n = prompt("Enter your name for the Leaderboard:");
  } while (!n.length);

  const start = document.querySelector(".start");
  start.style.display = "none";

  const end = document.querySelector(".end");

  const p = document.querySelector(".leaderboard");
  p.innerText = `theres no leaderboard, ${n}`;
  p.classList.add("leaderboard");

  end.style.display = "flex";
};
