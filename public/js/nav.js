let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
  relativePath = "../..";
}

document.querySelector("#mainNav").innerHTML = `
<div class="nav-header">
  <div id="mobile-format">
  <a href="` +
  relativePath +
  `/index.html">    <img src="` +
  relativePath + `/img/logo.png" id="header-image">
  <div class="desktop-menu"></a>
      <a href="` +
      relativePath +
      `/index.html">Illustrations</a>
      <a href="` +
      relativePath +
      `/comics.html">Comics</a></li>
      <a href="` +
      relativePath +
      `/extras.html">Miscellaneous</a></li>
      <a href="` +
      relativePath +
      `/about.html">About</a>
      
    </div>
    <div id="menu-button">
      Menu
    </div>
  </div>
  <div id="mobile-menu">
    <a href="` +
    relativePath +
    `/index.html">Illustrations</a>
    <a href="` +
    relativePath +
    `/comics.html">Comics</a>
    <a href="` +
    relativePath +
    `/extras.html">Miscellaneous</a>
    <a href="` +
    relativePath +
    `/about.html">About</a>
  </div>
</div>
`;

let menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", displayMenu);

function displayMenu() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*
This would go under regular header

<div class="social_media">
      <a href="" target="_blank">
          <i class="fa-brands fa-twitter"></i>
          <p>Twitter</p>
      </a>
      <a href="" target="_blank">
          <i class="fa-brands fa-tumblr"></i>
          <p>Tumblr</p>
      </a>
      <a href="" target="_blank">
          <i class="fa-solid fa-bug"></i>
          <p>Co-Host</p>
      </a>
  </div> */