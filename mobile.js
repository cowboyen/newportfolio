const doc = document;
const menuToggle = doc.querySelector(".menu");
const overlay = doc.querySelector(".overlay");

// Initialize menu state
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen; // Toggle the menu state
  overlay.classList.toggle("overlay--active", menuOpen); // Open/close menu
  menuToggle.textContent = menuOpen ? "Close" : "Menu"; // Update button text
});