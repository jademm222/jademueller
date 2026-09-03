```javascript
// Portfolio Navigation
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".portfolio-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove active class from all links
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class to the link that was clicked
            this.classList.add("active");

        });

    });

});
```
