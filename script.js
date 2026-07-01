const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  const currentHash = window.location.hash || "#home";

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("load", updateActiveLink);
window.addEventListener("hashchange", updateActiveLink);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
