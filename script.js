// menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// formulario

const form = document.querySelector("form");
const modal = document.getElementById("success-modal");
const closeBtn = document.querySelector(".close-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    modal.style.display = "flex";

    form.reset();
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// animacao das sessoes
AOS.init({
    duration: 800
  });
