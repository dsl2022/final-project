const container = document.getElementById("container");

const button = document.createElement("button");
button.textContent = "submit";
container.append(button);

button.addEventListener("click", () => {
  container.append(makeBall("purple"));
});

function makeBall(color) {
  const ball = document.createElement("div");
  ball.style.height = "5rem";
  ball.style.width = "5rem";
  ball.style.background = color;
  ball.style.borderRadius = "100%";
  return ball;
}
