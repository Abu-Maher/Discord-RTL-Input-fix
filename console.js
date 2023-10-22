function removeStyleAndDirAttributes() {
  const elements = document.querySelectorAll('div[data-slate-node="element"][style][dir]');

  elements.forEach((element) => {
    element.removeAttribute('style');
    element.removeAttribute('dir');
  });
}

let loopRunning = false;

function startLoop() {
  if (!loopRunning) {
    loopRunning = true;
    const loopFunction = () => {
      removeStyleAndDirAttributes();
      requestAnimationFrame(loopFunction);
    };
    requestAnimationFrame(loopFunction);
  }
}

function stopLoop() {
  loopRunning = false;
}

document.addEventListener('keydown', () => {
    startLoop();
});
