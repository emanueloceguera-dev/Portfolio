// script.js

// Toggle collapsible sidebar open/close
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Estimate response time based on topics and apply discount if checked
function estimateTime() {
  const topics = parseInt(document.getElementById("topics").value);
  const discount = document.getElementById("discount").checked;
  const timePerTopic = 2;

  if (!isNaN(topics) && topics > 0) {
    let estimate = topics * timePerTopic;
    if (discount) {
      estimate *= 0.9; // Apply 10% discount
    }
    document.getElementById("estimate").textContent = estimate.toFixed(1);
  } else {
    document.getElementById("estimate").textContent = "0";
  }
}

// Smooth scroll for internal links (optional bonus)
document.addEventListener("DOMContentLoaded", function () {
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
