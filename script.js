function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

function estimateTime() {
  const topics = parseInt(document.getElementById("topics")?.value);
  const estimate = (!isNaN(topics) && topics > 0) ? topics * 2 : 0;
  const output = document.getElementById("estimate");
  if (output) output.textContent = estimate;
}

function calculateTotal() {
  const price = 20;
  const quantity = parseInt(document.getElementById("quantity")?.value);
  let total = price * quantity;
  let discount = 0;

  if (!isNaN(quantity) && quantity >= 5) {
    discount = total * 0.10;
    total -= discount;
  }

  const totalEl = document.getElementById("totalSummary");
  if (totalEl) {
    totalEl.innerHTML = `
      <strong>Total:</strong> $${total.toFixed(2)}<br>
      <strong>Discount:</strong> $${discount.toFixed(2)}
    `;
  }
}
