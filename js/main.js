
/* Dropdown home lang  */

var dropdown = document.getElementById("lang-dropdown");
var menuDropdown =  document.getElementById("lang-dropdown-menu");

document.addEventListener('click', function(event) {
if (dropdown.contains(event.target)){
    menuDropdown.style.display = 'block';
}
else {
    menuDropdown.style.display = 'none';
}

}
);

