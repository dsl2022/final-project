const colors = [
  "#4f91cd",
  "#164f52",
  "#ab0013",
  "#4b001d",
  "#1a472a",
  "#fdef19",
  "#f0ff16",
  "#685c68",
  "#6d7062",
  "#7b5c62",
  "#175617",
  "#ff3569",
  "#5a0441",
  "#ab0013",
  "#ab0068",
  "#e08dff",
  "#00ffff",
  "#1b4d3e",
  "#c3e8de",
  "#fa7445",
  "#2ad3ff",
  "#75ff7e",
  "#919d77",
  "#94a88f",
  "#6a7865",
  "#7b8560",
  "#bbb295",
  "#766d5d",
];

const container = document.getElementById("container");

const button = document.createElement("button");
button.textContent = "submit";
container.append(button);

button.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const ballSize = Math.floor(Math.random() * 20);
  const ballX = Math.floor(Math.random() * 80);
  const ballY = Math.floor(Math.random() * 60);
  container.append(makeBall(randomColor, ballSize, ballX, ballY));
});

function makeBall(color, ballSize, ballX, ballY) {
  const ball = document.createElement("div");
  ball.style.position = "absolute";
  ball.style.top = `${ballY}rem`;
  ball.style.left = `${ballX}rem`;
  ball.style.height = `${ballSize}rem`;
  ball.style.width = `${ballSize}rem`;
  ball.style.background = color;
  ball.style.borderRadius = "100%";
  return ball;
}
