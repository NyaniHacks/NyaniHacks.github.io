document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const scrollToTop = document.createElement("button");
    
    // Load dark mode state from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️ Light Mode";
    }
    
    // Mobile Menu Toggle Animation
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    /* Dark Mode Toggle
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.innerText = "🌙 Dark Mode";
       }
    }); */

    // Scroll-to-Top Button
    scrollToTop.innerText = "⬆️";
    scrollToTop.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });

    scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // FAQ Section Toggle
    document.querySelectorAll(".faq h3").forEach(heading => {
        heading.addEventListener("click", function () {
          const faq = this.parentElement;
          faq.classList.toggle("active");
        });
    });
});