const btn_topo = document.getElementById("btn-topo");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        btn_topo.style.display = "block";
    }
    else {
        btn_topo.style.display = "none";
    }
});

btn_topo.addEventListener("click", function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    });
});