let relativePath = ".";
let currentURL = document.URL;
if (currentURL.includes("comics/")) {
	relativePath = "../..";
}

document.querySelector("#mainNav").innerHTML =
	`
<a href="` +
	relativePath +
	`/index.html">    <img src="` +
	relativePath +
	`/img/logo.png" id="header-image">
  <div id="secondary-nav">
<a href="` +
	relativePath +
	`/index.html" class="nav-links">Illustrations</a>
<a href="` +
	relativePath +
	`/comics.html" class="nav-links">Comics</a></li>
<a href="` +
	relativePath +
	`/projects.html" class="nav-links">Other Projects</a></li>
<a href="` +
	relativePath +
	`/about.html" class="nav-links">About</a>
</div>
`;
