// Navigation configuration for Jade Mueller
const primaryNavLinks = [
  { name: "About Me", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Experiences", url: "#experiences" },
  { name: "Contact Me", url: "#contact" }
];

const interestNavLinks = [
  { name: "Fashion", url: "#fashion" },
  { name: "Wellness", url: "#wellness" },
  { name: "Social Media", url: "#social-media" },
  { name: "Travel", url: "#travel" }
];

function generateNavButtons(links) {
  return `<nav>` + links.map(link => `<a href="${link.url}">${link.name}</a>`).join('') + `</nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Inject Primary Navigation links
  const primaryNav = document.getElementById("primary-nav");
  if (primaryNav) {
    primaryNav.innerHTML = generateNavButtons(primaryNavLinks);
  }

  // Inject Interests Navigation links
  const secondaryNav = document.getElementById("secondary-nav");
  if (secondaryNav) {
    secondaryNav.innerHTML = generateNavButtons(interestNavLinks);
  }

  // Inject Sidebar Links
  const sidebarNav = document.getElementById("sidebar-nav");
  if (sidebarNav) {
    sidebarNav.innerHTML = `
      <div class="nav-section">
        <h3>Navigation</h3>
        ${primaryNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
      <div class="nav-section">
        <h3>Focus Areas</h3>
        ${interestNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
    `;
  }
});
