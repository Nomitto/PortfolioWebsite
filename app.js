document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('a[href^="#"], .section-button')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(
          this.getAttribute("href") || `#${this.innerText.toLowerCase()}`
        );
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
});
