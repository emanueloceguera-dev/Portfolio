function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navLinks a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navLinks");
      if (nav.classList.contains("show")) {
        nav.classList.remove("show");
      }
    });
  });
});
