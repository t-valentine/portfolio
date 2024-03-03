let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
  relativePath = "../..";
}

document.querySelector("#navbar").innerHTML =
  `
  <h2>Site Navigation</h2>
<ul>
  <li><a href="` +
  relativePath +
  `/home.html">Home</a></li>
  <li><a href="` +
  relativePath +
  `/illustration.html">Illustrations</a></li>
  <li><a href="` +
  relativePath +
  `/comic.html">Comics</a></li>
  <li><a href="` +
  relativePath +
  `/webhelp.html">Resources</a></li>
  <li><a href="` +
  relativePath +
  `/aboutme.html">About Me</a></li>
  <li><a href="` +
  relativePath +
  `/sitemap.html">Site Map</a></li>
</ul>
` +
  document.querySelector("#navbar").innerHTML;

document.querySelector("#footer").innerHTML = `
  <img src="./assets/buttons/affection.gif" alt="made with affection" />
  <img src="./assets/buttons/valid-any.gif" alt="valid with any browser" />
  <img
    src="./assets/buttons/neocities-pink.gif"
    alt="Neocities.org - the web is yours!"
/>`;
