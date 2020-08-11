// The function changes the color of the text every 2 seconds
window.onload = function() {

    var x = document.getElementById("changeCol");
    x.style.color = "gold";

    function changeColor() {
        if (x.style.color == "gold") {
            x.style.color = "maroon";
        } else if (x.style.color == "maroon") {
            x.style.color = "gold";
        }
    };
    window.setInterval(changeColor, 2000);
};

window.onscroll = function() {
    scrollFunction()
};

// The function displays the scroll button when the window is scrolled by 20px
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

//scrolls to the top of the page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}