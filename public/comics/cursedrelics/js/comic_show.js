writeNav(true);

writePageClickable(".writePageClickable", true); //show the current page. to toggle whether pages can be clicked to move to the next one, set this to true or false.

keyNav(); //enables navigation through the comic with the arrow keys and WSAD. It doesn't need a div with a class name, it automatically works. delete or comment out (add // at the beginning) here to disable.

//SHOW COMIC PAGE, with clickable link
function writePageClickable(div, clickable) {
  if (!clickable) {
    document.querySelector(
      div
    ).innerHTML = `<div class="comicPage">${writePage()}</div>`; //display comic page without link
  } else if (pg < maxpg) {
    //check whether comic is on the last page
    document.querySelector(
      div
    ).innerHTML = `<div class="comicPage"><a href="?pg=${
      pg + 1
    }${navScrollTo}"/>${writePage()}</a></div>`; //display comic page and make it so that clicking it will lead you to the next page
  } else {
    document.querySelector(
      div
    ).innerHTML = `<div class="comicPage">${writePage()}</div>`; //display comic page without link
  }
}

//function used to split pages into multiple images if needed, and add alt text
function writePage() {
  let partExtension = ""; //part extension to add to the url if the image is split into multiple parts
  let altText = ""; //variable for alt text
  let path =
    (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //path for your comics made out of variables strung together
  let page = ``;

  if (pgData.length < pg) {
    //if the array is blank or not long enough to have an entry for this page
    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    page =
      `<img alt="` +
      altText +
      `" title="` +
      altText +
      `" src="` +
      path +
      `" />`;
    return page;
  } else if (pgData.length >= pg) {
    //if the array is not blank, and if its at least long enough to have an entry for the current page

    altText = pgData[pg - 1].altText; //set alt text to the text defined in the array

    if (pgData[pg - 1].imageFiles > 1) {
      //if theres more than one page segment
      for (let i = 1; i < pgData[pg - 1].imageFiles + 1; i++) {
        //for loop to put all the parts of the image on the webpage
        partExtension = imgPart + i.toString();
        path =
          (folder != "" ? folder + "/" : "") +
          image +
          pg +
          partExtension +
          "." +
          ext; //reinit path (there has to be a less dumb way to do this)
        if (i > 1) {
          page += `<br/>`;
        } //add line break
        page +=
          `<img alt="` +
          altText +
          `" title="` +
          altText +
          `" src="` +
          path +
          `" />`; //add page segment
      }
    } else {
      page =
        `<img alt="` +
        altText +
        `" title="` +
        altText +
        `" src="` +
        path +
        `" class="comic-page" />`;
    }
    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    return page;
  }
}

function imgOrText(setImg, navTextSet) {
  //function that writes the indicated nav button as either an image or text

  if (setImg) {
    //if its an image
    return (
      `<img src="` +
      navFolder +
      `/nav_` +
      navText[navTextSet].toLowerCase() +
      `.` +
      navExt +
      `" alt="` +
      navText[navTextSet] +
      `" />`
    );
  } else {
    return navText[navTextSet];
  }
}

function writeNav(imageToggle) {
  let writeNavDiv = document.querySelectorAll(".writeNav");
  writeNavDiv.forEach(function (element) {
    element.innerHTML = `<div class="comicNav">
        ${firstButton()}
        ${divider()}
        ${prevButton()}
        ${divider()}
        ${nextButton()}
        ${divider()}
        ${lastButton()}
        </div>
        `;
  });

  function firstButton() {
    //FIRST BUTTON
    if (pg > 1) {
      //wait until page 2 to make button active
      return (
        `<a href="?pg=` +
        1 +
        navScrollTo +
        `"/> <img src="./nav/first_active.png" alt="first"/> </a>`
      );
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 0);
      } else {
        return `<img src="./nav/first_inactive.png" alt="first"/>`;
      }
    }
  }

  function divider() {
    //divider
    if (!imageToggle) {
      return ` | `;
    }
    return ``;
  }

  function prevButton() {
    //PREV BUTTON
    if (pg > 1) {
      //wait until page 2 to make button active
      return (
        `<a href="?pg=` +
        (pg - 1) +
        navScrollTo +
        `"/> <img src="./nav/prev_active.png" alt="first"/> </a>`
      );
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 1);
      } else {
        return `<img src="./nav/prev_ina.png" alt="first"/>`;
      }
    }
  }

  function nextButton() {
    //NEXT BUTTON
    if (pg < maxpg) {
      //only make active if not on the last page
      return (
        `<a href="?pg=` +
        (pg + 1) +
        navScrollTo +
        `"/> <img src="./nav/next_active.png" alt="first"/> </a>`
      );
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 2);
      } else {
        return `<img src="./nav/next_ina.png" alt="first"/>`;
      }
    }
  }

  function lastButton() {
    //LAST BUTTON
    if (pg < maxpg) {
      //only make active if not on last page
      return (
        `<a href="?pg=` +
        maxpg +
        navScrollTo +
        `"/> <img src="./nav/last_active.png" alt="first"/> </a>`
      );
    } else {
      if (!imageToggle) {
        return imgOrText(imageToggle, 3);
      } else {
        return `<img src="./nav/last_ina.png" alt="first"/>`;
      }
    }
  }
}

//KEYBOARD NAVIGATION
function keyNav() {
  document.addEventListener("keydown", (e) => {
    if ((e.key == "ArrowRight" || e.key.toLowerCase() == "d") && pg < maxpg) {
      //right arrow or D goes to next page
      window.location.href = "?pg=" + (pg + 1) + navScrollTo;
    } else if ((e.key == "ArrowLeft" || e.key.toLowerCase() == "a") && pg > 1) {
      //left arrow or A goes to previous page
      window.location.href = "?pg=" + (pg - 1) + navScrollTo;
    } else if (e.key.toLowerCase() == "w") {
      //W scrolls up
      window.scrollBy({ top: -30 });
    } else if (e.key.toLowerCase() == "s") {
      //S scrolls down
      window.scrollBy({ top: 30 });
    }
  });
}
