<script>
const PARTICLES = 35;
const BASE_SPEED = 1;

function getSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if ((month === 1 && day >= 15) || (month === 2 && day <= 20)) {
    return "cny";
  }

  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "fall";
  return "winter";
}

const SEASON_ICON = {
  spring: "🌸",
  summer: "☀️",
  fall: "🍂",
  winter: "❄️",
  cny: "🧧"
};

const ICON = SEASON_ICON[getSeason()];

const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "0";
container.style.left = "0";
container.style.width = "100%";
container.style.height = "100%";
container.style.pointerEvents = "none";
container.style.overflow = "hidden";
container.style.zIndex = "9999";
document.body.appendChild(container);

function createIcon() {
  const el = document.createElement("div");
  el.textContent = ICON;
  el.style.position = "absolute";

  el.style.fontSize = (Math.random() * 8 + 10) + "px";

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = "-50px";
  el.style.opacity = Math.random() * 0.5 + 0.5;

  container.appendChild(el);

  let posY = -50;
  let posX = parseFloat(el.style.left);
  const drift = Math.random() * 1 - 0.5;
  const speed = Math.random() * 1 + BASE_SPEED;

  function animate() {
    posY += speed;
    posX += drift;
    el.style.top = posY + "px";
    el.style.left = posX + "px";

    if (posY < window.innerHeight + 50) {
      requestAnimationFrame(animate);
    } else {
      container.removeChild(el);
      createIcon();
    }
  }

  animate();
}

for (let i = 0; i < PARTICLES; i++) {
  createIcon();
}
</script>
