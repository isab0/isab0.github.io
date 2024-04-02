/* Drop down hamburger menu */

let dropdownButton = document.querySelector("dropdown-button");

function dropdownFunction() {
    let x = document.getElementById("dropdown-content");

    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transform = "translateY(0)";
    } 
    else {
        x.style.display = "block";
        x.style.transform = "translateY(-10%)";
    }
}
dropdownButton.addEventListener("click", dropdownFunction);

/* Color changer */

/* light grey grey black */

let input = document.querySelector("input");

function colorChanger() {
    /* Grayscale Color Pallette */
    if (input.checked) {
        r.style.setProperty("--navbar-color", "#808080");
        r.style.setProperty("--navbar-header-color", "#808080");
        r.style.setProperty("--dropdown-menu-color", "#d3d3d3ea");
    }
    /* Default Color Pallette */
    else {
        r.style.setProperty("--navbar-color", "#563030");
        r.style.setProperty("--navbar-header-color", "#f0fff0");
        r.style.setProperty("--dropdown-menu-color", "#704545ea");
    }
}

colorSwitch.addEventListener("click", colorChanger);