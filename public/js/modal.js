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

let updateModalSize = () => {
  if (window.innerWidth < 950 && window.innerWidth >= 600) {
    modal.style.maxHeight = window.innerWidth - 50 + "px";
    modal.style.maxWidth = window.innerWidth - 50 + "px";
    modal.style.padding = "20px";
    featImg.style.maxHeight = window.innerWidth - 150 + "px";
    featImg.style.maxWidth = window.innerWidth - 150 + "px";
  } else if (window.innerWidth < 600) {
    let height = window.innerWidth;
    let width = window.innerWidth - 100;
    modal.style.maxHeight = height + "px";
    modal.style.width = width + "px";
    featImg.style.maxHeight = height - 20 + "px";
    featImg.style.maxWidth = width - 20 + "px";
  } else {
    modal.style.maxHeight = null;
    modal.style.maxWidth = null;
    modal.style.padding = null;
    featImg.style.maxHeight = null;
    featImg.style.maxWidth = null;
  }
};

window.addEventListener("load", updateModalSize);
window.onresize = updateModalSize;

/*

.modal {
  max-height: 700px;
  max-width: 700px;
}
#featureimg {
  max-height: 650px;
  max-width: 650px;
}*/
