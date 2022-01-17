function intro() {
    var introElement = document.getElementById("intro-container");
    var mainElement = document.getElementById("main-container");
    setTimeout(function() {
        introElement.style.display = "none";
        mainElement.style.display = "block";
    }, 4000);
}