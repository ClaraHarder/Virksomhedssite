// Select all dropdown buttons
const dropdowns = document.querySelectorAll(".dropdown");

// Add mouseover and mouseout event listeners to each dropdown
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropdown-button");
  const menu = dropdown.querySelector(".dropdown-menu");

  // Show menu on mouseover
  button.addEventListener("mouseover", () => {
    menu.style.display = "block";
  });

  // Hide menu on mouseout
  dropdown.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
});
