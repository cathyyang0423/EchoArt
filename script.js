const leaderCards = document.querySelectorAll(".leader-card");

leaderCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

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

  // Allow keyboard interaction
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    "Bring " + artworkNames[index] + " to front"
  );

  function bringToFront() {

    // Remove front position from other artworks
    heroCards.forEach((otherCard) => {
      otherCard.classList.remove("is-front");
    });

    // Bring selected artwork to front
    card.classList.add("is-front");
  }

  // Mouse click
  card.addEventListener("click", bringToFront);

  // Keyboard: Enter or Space
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      bringToFront();
    }
  });

});
