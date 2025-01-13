document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdown.addEventListener("click", function () {
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});
