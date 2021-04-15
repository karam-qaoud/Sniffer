var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")) {
        icon.src = "./pictures/dark theme icon/sun.png";
    } else {
        icon.src = "./pictures/dark theme icon/moon.png";
    }
}