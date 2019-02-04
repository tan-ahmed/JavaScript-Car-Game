const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");
const container = document.getElementById("container");
const btnStart = document.querySelector(".btnStart");

// if (btnStart) {
btnStart.addEventListener("click", startGame, false);
// }

//key clicked
document.addEventListener("keydown", pressKeyOn);
//release key
document.addEventListener("keyup", pressKeyOff);

//game variables
let animationGame = requestAnimationFrame(playGame);
let gamePlay = false;
let player;

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

function startGame() {
  console.log(gamePlay);
  btnStart.style.display = "none";
  //creates players car using document object
  var div = document.createElement("div");
  div.setAttribute("class", "playerCar");
  //setup some properties for the div (start position)
  div.x = 250;
  div.y = 500;
  //determine and do calculations
  container.appendChild(div);
  gamePlay = true;
  animationGame = requestAnimationFrame(playGame);

  player = {
    speed: 1,
    lives: 3,
    gameScore: 0,
    carstoPass: 10
  };
}

function pressKeyOn() {}

function pressKeyOff() {}

function updateDash() {
  console.log(player);
  scoreDash.innerHTML = player.score;
  lifeDash.innerHTML = player.lives;
  speedDash.innerHTML = player.speed;
}

function playGame() {
  if (gamePlay) {
    updateDash();
  }
  animationGame = requestAnimationFrame(playGame);
}
