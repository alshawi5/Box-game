let score = 0;
let time = 30;
let timerInterval;
let moveInterval;

localStorage.setItem('highScore',score)
console.log('highScore', localStorage.getItem('highScore'))

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const box = document.getElementById("box");
const gameArea = document.getElementById("gameArea");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

function getRandomPosition() {
  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  return { x, y };
}

function moveBox() {
  // console.log('move box fn')
  const pos = getRandomPosition();
  box.style.left = pos.x + "px";
  box.style.top = pos.y + "px";
}

box.addEventListener("click", () => {
  console.log('CLICKED')
  score++;
  scoreEl.textContent = score;
  moveBox();
 const sound = new Audio("duck-quack-112941.mp3");
      document.getElementById("box").addEventListener("click", () => {
        sound.play();
      });

});

startBtn.addEventListener("click", () => {
  score = 0;
  time = 30;
  scoreEl.textContent = score;
  timeEl.textContent = time;
  message.textContent = "";

  box.style.display = "block";

  moveBox();
  startBtn.disabled = true;

  timerInterval = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(timerInterval);
      clearInterval(moveInterval);
      startBtn.disabled = false;
      box.style.display = "none";

      message.textContent = "🎉 Game Over! Your final score: " + score;
    }
  }, 1000);

  moveInterval = setInterval(()=>{console.log('interval');moveBox()}, 1000);
});



