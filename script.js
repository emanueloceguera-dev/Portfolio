function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Collapse nav on mobile after clicking a link
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

function calculateTotal() {
  const price = parseFloat(document.getElementById("product").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  let total = price * quantity;

  const output = document.getElementById("output");

  if (quantity >= 5) {
    total *= 0.9; // 10% discount
    output.innerText = `Discount applied! Total: $${total.toFixed(2)}`;
  } else {
    output.innerText = `Total: $${total.toFixed(2)}`;
  }

  // Animate the result
  output.classList.remove("show");
  void output.offsetWidth; // Force reflow
  output.classList.add("show");
}
