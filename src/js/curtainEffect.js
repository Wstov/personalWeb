document.addEventListener("DOMContentLoaded", function() {
    const curtain = document.querySelector(".curtain");
    const content = document.querySelector(".content");
    const delay = 2000; // 2 segundos

    setTimeout(function() {
        curtain.classList.add("hide");
        content.classList.add("show");
    }, delay);
});
