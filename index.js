const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;

// 25 minutes to seconds
let leftTime = 1500;

function updateTimer() {
  let minutes = Math.floor(leftTime / 60);
  let seconds = leftTime % 60;

  let formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formatedTime;
}

function startTimer() {
  interval = setInterval(() => {
    leftTime--;
    updateTimer();
    if (leftTime === 0) {
      clearInterval(interval);
      alert("Time's up");
      leftTime = 1500;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  leftTime = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
