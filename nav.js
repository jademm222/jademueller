// Navigation links configuration
const navLinks = [
  { name: "About Me", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Experiences", url: "#experiences" },
  { name: "Matcha", url: "#matcha" },
  { name: "Portfolio", url: "#portfolio" },
  { name: "Contact Me", url: "#contact" }
];

document.addEventListener("DOMContentLoaded", () => {
  const primaryNav = document.getElementById("nav-links");
  if (primaryNav) {
    primaryNav.innerHTML = navLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('');
  }
});
