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

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const hash = link.getAttribute("href");
    const targetSection = document.querySelector(hash);
    const headerHeight = header.offsetHeight;

    window.scrollTo({
      top: targetSection.offsetTop - headerHeight - 20,
      behavior: "smooth"
    });

    history.pushState(null, "", hash);
    setActiveLink(hash);
  });
});

window.addEventListener("load", () => {
  const hash = window.location.hash || "#home";
  setActiveLink(hash);
});
