document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-menu");
    const closeBtn = document.getElementById("close-menu");
    const menu = document.getElementById("fullscreen-menu");

    openBtn.addEventListener("click", () => {
        menu.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
    });

    menu.querySelectorAll("a").forEach(link =>
        link.addEventListener("click", () => {
            menu.style.display = "none";
        })
    );
});