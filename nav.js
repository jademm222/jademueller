// Centralized Navigation Data
const primaryNavLinks = [
  { name: "Home", url: "index.html" },
  { name: "About", url: "about.html" },
  { name: "Projects", url: "projects.html" },
  { name: "Contact", url: "contact.html" }
];

const secondaryNavLinks = [
  { name: "Docs", url: "#" },
  { name: "Gallery", url: "#" },
  { name: "Blog", url: "#" },
  { name: "FAQ", url: "#" }
];

function buildNavHTML(links) {
  return `<nav>` + links.map(link => `<a href="${link.url}">${link.name}</a>`).join(' | ') + `</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate Top Primary Navigation
  const primaryNavContainer = document.getElementById("primary-nav");
  if (primaryNavContainer) {
    primaryNavContainer.innerHTML = buildNavHTML(primaryNavLinks);
  }

  // Populate Top Secondary Navigation
  const secondaryNavContainer = document.getElementById("secondary-nav");
  if (secondaryNavContainer) {
    secondaryNavContainer.innerHTML = buildNavHTML(secondaryNavLinks);
  }

  // Populate Left Sidebar Navigation
  const sidebarNavContainer = document.getElementById("sidebar-nav");
  if (sidebarNavContainer) {
    sidebarNavContainer.innerHTML = `
      <div class="nav-section">
        <h3>Primary Navigation</h3>
        ${primaryNavLinks.map(l => `<div><a href="${l.url}">${l.name}</a></div>`).join('')}
      </div>
      <div class="nav-section">
        <h3>Secondary Navigation</h3>
        ${secondaryNavLinks.map(l => `<div><a href="${l.url}">${l.name}</a></div>`).join('')}
      </div>
    `;
  }
});
