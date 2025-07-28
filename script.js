// Toggle collapsible sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Estimate response time based on number of topics and discount checkbox
function estimateTime() {
  const topics = parseInt(document.getElementById("topics").value, 10);
  const discount = document.getElementById("discount").checked;
  const timePerTopic = 2;

  let estimate = 0;

  if (!isNaN(topics) && topics > 0) {
    estimate = topics * timePerTopic;
    if (discount) {
      estimate *= 0.9; // Apply 10% discount
    }
  }

  document.getElementById("estimate").textContent = estimate.toFixed(1);
}

// Calculate total cost of consulting hours
function calculateTotal() {
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const discount = document.getElementById("discount").checked;
  const rate = 20;

  let total = 0;

  if (!isNaN(quantity) && quantity > 0) {
    total = quantity * rate;
    if (discount) {
      total *= 0.9; // Apply 10% discount
    }
  }

  document.getElementById("totalSummary").innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
}

// Smooth scroll for internal anchor links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
