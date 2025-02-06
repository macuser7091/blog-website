
// Sabhi images ko select karna
document.querySelectorAll(".post1").forEach(function (img) {
    img.addEventListener("click", function () {
        // Image ke data-url attribute se URL lena
        let targetUrl = img.getAttribute("data-url");
        window.location.href = targetUrl;
    });
});

// navbar me menu button ke liye
document.querySelector(".menu-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("show");
});
