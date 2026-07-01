const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

function setActiveLink(hash) {
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === hash) {
      link.classList.add("active");
    }
  });
}

function scrollToSection(hash) {
  const targetSection = document.querySelector(hash);

  if (!targetSection) return;

  const headerHeight = header.offsetHeight;
  const topPosition = targetSection.offsetTop - headerHeight - 18;

  window.scrollTo({
    top: topPosition,
    behavior: "smooth"
  });

  history.pushState(null, "", hash);
  setActiveLink(hash);
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const hash = link.getAttribute("href");
    scrollToSection(hash);
  });
});

window.addEventListener("load", () => {
  const hash = window.location.hash || "#home";
  setActiveLink(hash);
});
