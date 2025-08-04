function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");

  // shift main content too
  document.body.classList.toggle("sidebar-open");
}

// Collapse sidebar after clicking a link (on mobile)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.remove("show");
      document.body.classList.remove("sidebar-open");
    });
  });
});
