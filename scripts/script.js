var navBar = document.getElementById("nav");
var menuOpen = false;
var menuButton = document.getElementById("menuButton");
menuButton.onclick = function(){
    if(menuOpen){
        navBar.style.height = "10vh";
        menuOpen = false;
    }
    else{
        navBar.style.height = "33vh";
        menuOpen = true;
    }
}