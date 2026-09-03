```javascript
// Navigation menu
document.addEventListener("DOMContentLoaded", function () {

    const nav = document.createElement("nav");
    nav.className = "portfolio-nav";

    nav.innerHTML = `
        <div class="nav-name">JADE MUELLER</div>

        <a href="about.html">About Me</a>
        <a href="education.html">Education</a>
        <a href="experiences.html">Experiences</a>
        <a href="contact.html">Contact Me</a>
    `;

    document.body.prepend(nav);
});
```
