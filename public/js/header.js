{
  /*
let relativePath = ".";
if ( url.includes("posts/") ) {
  relativePath = "..";
}
console.log(relativePath)
*/
}

let relativePath = ".";
let currentURL = document.URL;
if ( currentURL.includes("comics/") ) {
  relativePath = "../..";
}
console.log(relativePath)


document.querySelector(".writeHeader").innerHTML = `
    <header>
        <div class="header">
        <h1> <a href="`+ relativePath +`/index.html" class="nameHeader"> &#10052 Tobi Valentine &#10052 </a> </h1>
        </div>
        <div class="nav">
          <a href="`+ relativePath +`/comic-home.html" id="comics" class="unselected-page">Comics</a>
          <a href="`+ relativePath +`/index.html" id="home" class="unselected-page">Illustrations</a>
          <a href="`+ relativePath +`/about.html" id="about" class="unselected-page">About</a> 
        </div>
    </header>
`;


if (currentURL.includes("comic-home") || currentURL.includes("comics")) {
  document.getElementById("comics").classList.remove("unselected-page");
  document.getElementById("comics").classList.add("selected-page");
} else if (currentURL.includes("about")) {
  document.getElementById("about").classList.remove("unselected-page");
  document.getElementById("about").classList.add("selected-page");
}
else {
  document.getElementById("home").classList.remove("unselected-page");
  document.getElementById("home").classList.add("selected-page");
}

