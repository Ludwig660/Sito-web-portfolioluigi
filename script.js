document.addEventListener("DOMContentLoaded", function () {
  const createBackToTopButton = () => {
    const button = document.createElement("button");
    button.className = "back-to-top";
    button.innerHTML = '<i class="ri-arrow-up-line" aria-hidden="true"></i>';
    button.setAttribute("aria-label", "Torna all'inizio della pagina");
    button.setAttribute("type", "button");

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 700) {
        button.style.opacity = "1";
        button.style.visibility = "visible";
      } else {
        button.style.opacity = "0";
        button.style.visibility = "hidden";
      }
    });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const typingEffect = () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const element = document.querySelector(".description-card h2");
    if (!element) return;

    const text = element.textContent;
    element.textContent = "";

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
  };

  createBackToTopButton();
  typingEffect();
});
