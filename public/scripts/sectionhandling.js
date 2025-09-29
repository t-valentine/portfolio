function showSection(button) {
  let section = document.getElementById(button.value);
  let sectionIcon = button.lastElementChild;
  if (section.style.display == "block") {
    section.style.display = "none";
    sectionIcon.innerHTML = "+";
  } else {
    section.style.display = "block";
    sectionIcon.innerHTML = "-";
  }
}
