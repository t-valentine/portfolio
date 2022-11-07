document.querySelector(".writeHeader").innerHTML = `
    <header>
        <div class="header">
            <h1> &#10052 Tobi Valentine &#10052 </h1>
        </div>
        <div class="nav">
        <a href="https://h0neymice.neocities.org/comic-home.html" id="comics" class="unselected-page">Comics</a>
        <a href="https://h0neymice.neocities.org/index.html" id="home" class="unselected-page">Illustrations</a>
        <a href="https://h0neymice.neocities.org/about.html" id="about" class="unselected-page">About</a>
        </div>
    </header>
`;

{
  /* <a href="./comic-home.html" id="comics" class="unselected-page">Comics</a>
<a href="./index.html" id="home" class="unselected-page">Illustrations</a>
<a href="./about.html" id="about" class="unselected-page">About</a> */
}

let currentURL = document.URL;

console.log(currentURL);

if (currentURL.includes("comic-home.html") || currentURL.includes("comics")) {
  console.log("comics page");
  document.getElementById("comics").classList.remove("unselected-page");
  document.getElementById("comics").classList.add("selected-page");
} else if (currentURL.includes("index.html")) {
  console.log("index page");
  document.getElementById("home").classList.remove("unselected-page");
  document.getElementById("home").classList.add("selected-page");
} else if (currentURL.includes("about.html")) {
  console.log("about page");
  document.getElementById("about").classList.remove("unselected-page");
  document.getElementById("about").classList.add("selected-page");
}
