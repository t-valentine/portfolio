//can use custom data-* to hold description on a image! Or use an object

//items I want to CHANGE
const featImg = document.getElementById('featureimg');
const imgTitle = document.getElementById('imgtitle');
const imgDesc = document.getElementById('imgdesc');
const hideShow = document.getElementById('hideshow');

//select nodelist of elements with classes bc all my gallery images will have a class of clickablepic

const clickPic = document.querySelectorAll('.clickablepic'); //creates a nodelist

for(let i=0; i < clickPic.length; i++){
    clickPic[i].addEventListener('click', changePic);
}

//fxn to click shit and change the title and description
function changePic(e) {
    //test if class isa pic type else make it blank (Default)
    if (e.target.className === 'clickablepic'){
        featImg.src = e.target.src; 
        imgTitle.innerText = e.target.title;
        imgDesc.innerText = e.target.dataset.desc;
        featImg.style.border="3px white solid";
    } else {
        featImg.src = "images/blank.gif"
        imgTitle.innerText = "";
        imgDesc.innerText = "";
        featImg.style.border="none";
    }
}
