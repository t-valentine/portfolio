const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const clickPic = document.querySelectorAll(".clickablepic");
const closeModalBtn = document.querySelector(".btn-close");

// open modal function
const openModal = function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  changePic(e);
};

for (let i = 0; i < clickPic.length; i++) {
  clickPic[i].addEventListener("click", openModal);
}

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const featImg = document.getElementById("featureimg");
const imgTitle = document.getElementById("imgtitle");
const imgDesc = document.getElementById("imgdesc");

//fxn to click shit and change the title and description
function changePic(e) {
  //test if class isa pic type else make it default
  if (e.target.className === "clickablepic") {
    featImg.src = e.target.src;
    imgTitle.innerText = e.target.title;
    imgDesc.innerText = e.target.dataset.desc;
    modal.style.top = window.scrollY + 20 + "px";
  }
}

// updates modal and image size
let updateModalSize = () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let padding = 20
  if (windowWidth <= 900) {
    modal.style.padding = "15px";
    padding = 15;
  }

  featImg.style.maxHeight = windowHeight - 100 + "px";
  featImg.style.maxWidth = windowWidth - 100 + "px";

};

window.addEventListener("load", updateModalSize);
window.onresize = updateModalSize;
