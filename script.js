
/* Leaders page */
const leaderCards = document.querySelectorAll(".leader-card");

leaderCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

/* Homepage interactive artwork */
const heroCards = document.querySelectorAll(
  ".hero-art .floating-card"
);

const artworkNames = [
  "Starry photograph",
  "Cat drawing",
  "EchoArt logo"
];

heroCards.forEach((card, index) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    "Bring " + artworkNames[index] + " to front"
  );

  function bringToFront() {
    heroCards.forEach((otherCard) => {
      otherCard.classList.remove("is-front");
    });

    card.classList.add("is-front");
  }

  card.addEventListener("click", bringToFront);

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      bringToFront();
    }
  });
});
