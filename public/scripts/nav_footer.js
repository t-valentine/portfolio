let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
  relativePath = "../..";
}

document.querySelector("#headerArea").innerHTML =
  `        
<div id="header" style="height: 178px"></div>
<nav id="navbar" style="margin-bottom: 0px">
<ul>
<li><a href="` +
  relativePath +
  `/index.html">Home (Illustrations)</a></li>

<li><a href="` +
  relativePath +
  `/comichome.html">Comics</a></li>

            <li><a href="` +
  relativePath +
  `/webhelp.html">Website Help</a></li>

            <li><a href="` +
  relativePath +
  `/about.html">About Me</a></li>

            <li><a href="` +
  relativePath +
  `/sitemap.html">Site Map</a></li>
          </ul>
        </nav>`;

document.querySelector("#footer").innerHTML = `T. Valentine &#169; 2025`;
