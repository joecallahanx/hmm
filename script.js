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
