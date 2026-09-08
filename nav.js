// Navigation configuration for Jade Mueller's site
const mainNavLinks = [
  { name: "About Me", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Experiences", url: "#experiences" },
  { name: "Contact Me", url: "#contact" }
];

const secondaryNavLinks = [
  { name: "Geology", url: "#geology" },
  { name: "Hawaiian Studies", url: "#hawaiian-studies" },
  { name: "Projects", url: "#projects" },
  { name: "Resume", url: "#resume" }
];

function createNavElements(links) {
  return `<nav>` + links.map(link => `<a href="${link.url}">${link.name}</a>`).join(' &bull; ') + `</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject Primary Navigation
  const primaryNav = document.getElementById("primary-nav");
  if (primaryNav) {
    primaryNav.innerHTML = createNavElements(mainNavLinks);
  }

  // Inject Secondary Navigation
  const secondaryNav = document.getElementById("secondary-nav");
  if (secondaryNav) {
    secondaryNav.innerHTML = createNavElements(secondaryNavLinks);
  }

  // Inject Left Sidebar Navigation
  const sidebarNav = document.getElementById("sidebar-nav");
  if (sidebarNav) {
    sidebarNav.innerHTML = `
      <div class="nav-section">
        <h3>Main Navigation</h3>
        ${mainNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
      <div class="nav-section">
        <h3>Focus Areas</h3>
        ${secondaryNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
    `;
  }
});
