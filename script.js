const heading = document.querySelector(".center-content h1");
const paragraphs = document.querySelectorAll(".center-content p");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  // Shrink heading size
  let scale = Math.max(1 - scrollY / 800, 0.5);
  heading.style.transform = `scale(${scale})`;

  // Fade heading out
  let opacity = Math.max(1 - scrollY / 400, 0);
  heading.style.opacity = opacity;

  // Fade paragraphs slightly later
  paragraphs.forEach(p => {
    p.style.opacity = Math.max(1 - scrollY / 200, 0);
  });
});

let currentScroll = 0;
let targetScroll = 0;
const easing = 0.05; // smaller = slower smooth scroll

window.addEventListener('wheel', (e) => {
targetScroll += e.deltaY;
// clamp targetScroll so it doesn't go past document
targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
});

function smoothScroll() {
currentScroll += (targetScroll - currentScroll) * easing;
window.scrollTo(0, currentScroll);
requestAnimationFrame(smoothScroll);
}

smoothScroll();