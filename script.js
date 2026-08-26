const navLinks = document.querySelectorAll(".nav-links a");

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }

  if (currentPage === "" && linkPage === "index.html") {
    link.classList.add("active");
  }
});
