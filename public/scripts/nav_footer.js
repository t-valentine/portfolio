let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
  relativePath = "../..";
}

// took header out:
// <div id="header" style="height: 178px"></div>
document.querySelector("#headerArea").innerHTML =
  `       
<nav id="navbar" style="margin-bottom: 0px">
<ul>
<li><a href="` +
  relativePath +
  `/index.html">&#127968;</a></li>
<li><a href="` +
  relativePath +
  `/illustrations.html">Illustrations</a></li>

<li><a href="` +
  relativePath +
  `/comichome.html">Comics</a></li>

         <!--   <li><a href="` +
  relativePath +
  `/projects.html">Projects⤴</a></li> -->

            <li><a href="` +
  relativePath +
  `/about.html">About</a></li>
          </ul>
        </nav>`;

document.querySelector("#footer").innerHTML = `T. Valentine &#169; 2025`;
