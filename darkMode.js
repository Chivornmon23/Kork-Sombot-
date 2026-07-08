const toggleBtn = document.getElementById("toggle-btn");
const themeIcon = toggleBtn.querySelector("i");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    // 1. Toggle dark mode
    body.classList.toggle("dark");

    // 2. Toggle the icon classes
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
});