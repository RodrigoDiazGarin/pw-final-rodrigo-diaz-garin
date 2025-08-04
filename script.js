// Menu Desktop link activo
document.addEventListener("DOMContentLoaded", () => {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === path) {
            link.classList.add("active");
        }
    });
});

// Menu Mobile
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

// Reproductor
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("audio-toggle");
    const audio = document.getElementById("audio");

    let isPlaying = false;

    button.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            button.textContent = "▶";
        } else {
            audio.play();
            button.textContent = "⏸";
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener("ended", () => {
        isPlaying = false;
        button.textContent = "▶";
    });
});
