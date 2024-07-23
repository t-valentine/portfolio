let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
  relativePath = "../..";
}

document.querySelector("#header").innerHTML = `        <h1>h0neymice</h1>
<img src="./assets/KDL3_Nago_and_Kirby_artwork_2.png" />`;

document.querySelector("#navbar").innerHTML =
  `
  <h2>Content</h2>
<ul>
  <li><a href="` +
  relativePath +
  `/index.html">Home</a></li>
  <li><a href="` +
  relativePath +
  `/comic.html">Comics</a></li>
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
<div><p id="footertext">T. Valentine &#169; 2024</p></div>
`;
