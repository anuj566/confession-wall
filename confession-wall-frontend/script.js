// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("confessionInput");
  const submitBtn = document.getElementById("submitBtn");
  const confessionsContainer = document.getElementById("confessionsContainer");

  // Load previous confessions from localStorage
  const savedConfessions = JSON.parse(localStorage.getItem("confessions")) || [];

  // Display saved confessions
  savedConfessions.forEach((text) => addConfession(text));

  // Add event listener on the "Confess" button
  submitBtn.addEventListener("click", () => {
    const confession = input.value.trim();
    if (confession) {
      addConfession(confession);
      savedConfessions.push(confession);
      localStorage.setItem("confessions", JSON.stringify(savedConfessions));
      input.value = "";
    }
  });

  // Function to create and add a confession card
  function addConfession(text) {
    const card = document.createElement("div");
    card.className = "confession-card fade-in";
    card.textContent = text;
    confessionsContainer.prepend(card); // Add new confessions to top

    // Trigger animation
    setTimeout(() => {
      card.classList.add("visible");
    }, 100);
  }
});
document.getElementById("clearBtn").addEventListener("click", () => {
  localStorage.removeItem("confessions");
  confessionsContainer.innerHTML = "";
});
