document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.querySelector("[data-release]");
  const targetDate = new Date(countdown.dataset.release);
  const display = countdown.querySelector("time");

  const format = (n) => String(n).padStart(2, "0");

  const update = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      display.textContent = "Switch 2 is out! 🎉";
      document.body.classList.add("launched");
      const audio = new Audio("assets/coin.wav");
      audio.play();
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    display.textContent = `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`;
  };

  update();
  const timer = setInterval(update, 1000);
});
