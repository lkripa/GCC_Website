// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = " w3-bar" + " w3-card" + " w3-animate-top" +" w3-white";
    } else {
        navbar.className = navbar.className.replace("w3-card w3-animate-top", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button for MOBILE
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Change the language
function toggleLanguage(language){
    console.log("Language Changed");
    let myElements = document.querySelectorAll(language);
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].style.display="block";
        // myElements[i].style.visibility="visible";
    }

    let langArray = ['.en', '.de', '.fr', '.it'];
    for (let j = 0; j < langArray.length; j++){
        if (langArray[j] != language) {
            let myElements = document.querySelectorAll(langArray[j]);
            for (let i = 0; i < myElements.length; i++) {
                myElements[i].style.display="none";
                // myElements[i].style.visibility="collapse";
            }
        }
    }
}

// Change the visual language on button
function swap(language) {
    var x = document.getElementById("languageButton");
    var languageSelected = document.getElementById(language);
    x.textContent = language;
    console.log(x.textContent);
}

