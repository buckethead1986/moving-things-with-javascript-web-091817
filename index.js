const app = "I don't do much.";
const dodger = document.getElementById("dodger");
document.addEventListener("keydown", function(e) {
  if (e.which === 37) {
    moveDodgerLeft();
  }
});
document.addEventListener("keydown", e => {
  if (e.which === 39) {
    moveDodgerRight();
  }
});
document.addEventListener("keydown", e => {
  if (e.which === 38) {
    moveDodgerUp();
  }
});
document.addEventListener("keydown", e => {
  if (e.which === 40) {
    moveDodgerDown();
  }
});
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}
moveDodgerUp = () => {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);
  if (up < 360) {
    dodger.style.bottom = `${up + 10}px`;
  }
};

moveDodgerDown = () => {
  const downNumbers = dodger.style.bottom.replace("px", "");
  const down = parseInt(downNumbers, 10);
  if (down > 0) {
    dodger.style.bottom = `${down - 10}px`;
  }
};
