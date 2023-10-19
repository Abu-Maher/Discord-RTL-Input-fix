function removeStyleAndDirAttributes() {
  const elements = document.querySelectorAll('div[data-slate-node="element"][style][dir]');

  elements.forEach((element) => {
    element.removeAttribute('style');
    element.removeAttribute('dir');
  });
}

let timer;

document.addEventListener('keydown', () => {
  clearTimeout(timer);
  timer = setTimeout(removeStyleAndDirAttributes, -1);
});
