function estimateTime() {
  const topics = parseInt(document.getElementById("topics").value);
  const timePerTopic = 2;
  const estimate = (!isNaN(topics) && topics > 0) ? topics * timePerTopic : 0;
  document.getElementById("estimate").textContent = estimate;
}

function calculateTotal() {
  const price = 20;
  const quantity = parseInt(document.getElementById("quantity").value);
  let total = price * quantity;
  let discount = 0;

  if (!isNaN(quantity) && quantity >= 5) {
    discount = total * 0.10; // 10% discount
    total -= discount;
  }

  document.getElementById("totalSummary").innerHTML = `
    <strong>Total:</strong> $${total.toFixed(2)}<br>
    <strong>Discount:</strong> $${discount.toFixed(2)}
  `;
}
