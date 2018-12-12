/* This function controls the "hamburger" menu, toggling between open and closed in the navigation bar.*/
function hamburgerFunc() {
    var x = document.getElementById("spongeNavbar");
    if (x.className === "block") {
        x.className += "none";
    } else {
        x.className = "block";
    }

}