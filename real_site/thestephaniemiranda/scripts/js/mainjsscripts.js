/* This function controls the "hamburger" menu, toggling between open and closed in the navigation bar.*/
function hamburgerFunc() {
    var x = document.getElementById("spongeTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}