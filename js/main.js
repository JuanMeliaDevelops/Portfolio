
/* Dropdown home lang  */

const dropdown = document.getElementById("lang-dropdown");
const menuDropdown =  document.getElementById("lang-dropdown-menu");

document.addEventListener('click', function(event) {
if (dropdown.contains(event.target)){
    menuDropdown.style.display = 'block';
}
else {
    menuDropdown.style.display = 'none';
}

}
);


/* Scroll Down a trabajos  Animacion */

const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('mouseenter', function(event){
        scrollDown.classList.add("animate__animated", "animate__bounce");
    } );

    scrollDown.addEventListener('mouseleave', function(event) {
        scrollDown.classList.remove("animate__animated", "animate__bounce");
    });
