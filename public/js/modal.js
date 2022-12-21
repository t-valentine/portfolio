const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const clickPic = document.querySelectorAll(".clickablepic");
const closeModalBtn = document.querySelector(".btn-close");

// open modal function
const openModal = function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  changePic(e);
  modal.scrollIntoView({ block: "start", behavior: "smooth" });
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
  }
}
