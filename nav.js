// Navigation configuration customized for Jade Mueller
const primaryNavLinks = [
  { name: "About Me", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Experiences", url: "#experiences" },
  { name: "Contact Me", url: "#contact" }
];

const secondaryNavLinks = [
  { name: "Matcha", url: "#matcha" },
  { name: "Portfolio", url: "#portfolio" },
  { name: "Social Media", url: "#social" },
  { name: "Travel", url: "#travel" }
];

function generateNavButtons(links) {
  return `<nav>` + links.map(link => `<a href="${link.url}">${link.name}</a>`).join('') + `</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject Primary Navigation links into top header slot
  const primaryNav = document.getElementById("primary-nav");
  if (primaryNav) {
    primaryNav.innerHTML = generateNavButtons(primaryNavLinks);
  }

  // Inject Secondary Navigation links into top header slot
  const secondaryNav = document.getElementById("secondary-nav");
  if (secondaryNav) {
    secondaryNav.innerHTML = generateNavButtons(secondaryNavLinks);
  }

  // Inject Links into Left Sidebar Navigation
  const sidebarNav = document.getElementById("sidebar-nav");
  if (sidebarNav) {
    sidebarNav.innerHTML = `
      <div class="nav-section">
        <h3>Main Navigation</h3>
        ${primaryNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
      <div class="nav-section">
        <h3>Highlights</h3>
        ${secondaryNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
    `;
  }
});
