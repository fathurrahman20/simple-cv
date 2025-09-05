const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", checkFade);

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach((fader) => {
    const faderTop = fader.getBoundingClientRect().top;
    if (faderTop < triggerBottom) {
      fader.classList.add("show");
    }
  });
}

checkFade();
