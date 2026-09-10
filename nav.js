// Navigation links configuration for Jade Mueller
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
  // Inject Primary Navigation links into Header
  const primaryNav = document.getElementById("primary-nav");
  if (primaryNav) {
    primaryNav.innerHTML = generateNavButtons(primaryNavLinks);
  }

  // Inject Interests Navigation links into Header
  const secondaryNav = document.getElementById("secondary-nav");
  if (secondaryNav) {
    secondaryNav.innerHTML = generateNavButtons(interestNavLinks);
  }

  // Inject Links into Left Sidebar Navigation
  const sidebarNav = document.getElementById("sidebar-nav");
  if (sidebarNav) {
    sidebarNav.innerHTML = `
      <div class="nav-section">
        <h3>Navigation</h3>
        ${primaryNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
      <div class="nav-section">
        <h3>Interests</h3>
        ${interestNavLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('')}
      </div>
    `;
  }
});
