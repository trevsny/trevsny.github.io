/* Open */
function openNav() {
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.display = "block";
    document.getElementById("wrapper").style.display = "none";

}

/* Close */
function closeNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("nav").style.height = "100%";
    document.getElementById("wrapper").style.display = "block";

}