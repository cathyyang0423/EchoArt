const leaderCards = document.querySelectorAll(".leader-card");

leaderCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});
