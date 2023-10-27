// checks if another dropdown is open and closes that before opening dropdown that was clicked
const showDropdown = (e) => {
  var button = e.target;
  if (
    button.id != "last-visible-dropdown" &&
    document.getElementById("last-visible-dropdown")
  ) {
    var currentlyOpen = document.getElementById("last-visible-dropdown");
    currentlyOpen.nextElementSibling.removeAttribute("id");
    currentlyOpen.removeAttribute("id");
  }
  button.id = "last-visible-dropdown";
  var dropdown = button.nextElementSibling;
  dropdown.id = "show";
};

// adds eventlistener to dropdown buttons
const buttons = document.getElementsByClassName("dropbtn");
for (const button of buttons) {
  button.addEventListener("click", showDropdown);
}

// hides dropdowns if user clicks anywhere else on page
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if ((openDropdown.id = "show")) {
        openDropdown.removeAttribute("id");
      }
    }
  }
};
