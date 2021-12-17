function display() {
        // yes i stole this from riley: rileyis.gay
        notfirefox = document.getElementById("notfirefox");
        firefox = document.getElementById("firefox");
        // determine if the browser is IE
            var isIE = (navigator.appName == "Microsoft Internet Explorer");
        //if the browser is Microsoft Internet Explorer, show massive warning
        if (isIE) {
            alert("You are using Internet Explorer (what the fuck it's so fucking old and shit). This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
            firefox.style.display = "none";
            notfirefox.style.display = "block";
        };
        // warn user if browser is chrome
        if (navigator.userAgent.indexOf("Chrome") > -1) {
            alert("You are using Google Chrome or a Chromium-based browser. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
            firefox.style.display = "none";
            notfirefox.style.display = "block";
        };
        //give user hug if browser is firefox
        if (navigator.userAgent.indexOf("Firefox") > -1) {
            alert("You are using Firefox. You're cool :)");
            firefox.style.display = "block";
            notfirefox.style.display = "none";
        };
        //if browser is safari, show warning
        if (navigator.userAgent.indexOf("Safari") > -1) {
            alert("You are not using Firefox. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
            firefox.style.display = "none";
            notfirefox.style.display = "block";
        };
        //if device is iphone, show warning
        if (navigator.userAgent.indexOf("iPhone") > -1) {
            alert("You are using an iPhone. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
            firefox.style.display = "none";
            notfirefox.style.display = "block";
        };
};