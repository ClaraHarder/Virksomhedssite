function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isVisible = dropdown.style.display === "block";

  // Luk alle dropdowns
  document.querySelectorAll(".dropdown-content1").forEach((menu) => {
    menu.style.display = "none";
  });
  // Luk alle dropdowns
  document.querySelectorAll(".dropdown-content2").forEach((menu) => {
    menu.style.display = "none";
  });

  // Åbn kun den valgte, hvis den ikke allerede er åben
  if (!isVisible) {
    dropdown.style.display = "block";
  }
}

// Klik udenfor dropdown lukker den
document.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown-btn1")) {
    document.querySelectorAll(".dropdown-content1").forEach((menu) => {
      menu.style.display = "none";
    });
  }
  // Klik udenfor dropdown lukker den
  document.addEventListener("click", (event) => {
    if (!event.target.matches(".dropdown-btn2")) {
      document.querySelectorAll(".dropdown-content").forEach((menu) => {
        menu.style.display = "none";
      });
    }
  });
});
