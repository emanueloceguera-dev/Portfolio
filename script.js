function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

function calculateTotal() {
  const price = parseFloat(document.getElementById("product").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  let total = price * quantity;

  if (quantity >= 5) {
    total *= 0.9; // 10% discount
    document.getElementById("output").innerText = `Discount applied! Total: $${total.toFixed(2)}`;
  } else {
    document.getElementById("output").innerText = `Total: $${total.toFixed(2)}`;
  }
}
