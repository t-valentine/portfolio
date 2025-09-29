const createHeader = () => {
  // checks URL to set Relative Path (since comics & blog have nested pages)
  let relativePath = ".";
  let currentURL = document.URL;
  if (currentURL.includes("blog/")) {
    relativePath = "..";
  }
  if (currentURL.includes("comics/") || currentURL.includes("posts/")) {
    relativePath = "../..";
  }
  // creates navBar
  let navBar = `
    <ul>
    <li><a href="${relativePath}/index.html">Home</a></li>
    <li><a href="${relativePath}/illustrations.html">Illustrations</a></li>
    <li><a href="${relativePath}/comics.html">Comics</a></li>
    <li><a href="${relativePath}/about.html">About Me</a></li>
    </ul>`;
  // checks that header exists and puts it all together
  let header = document.querySelector("header");
  if (header != null) {
    header.innerHTML = `<span id="header-spacer" title="honeyhamster"><h1>honeyhamster</h1></span><nav>${navBar}</nav>`;
  }
};

const createFooter = () => {
  let footer = document.querySelector("footer");
  if (footer != null) {
    footer.innerHTML = `<p>&#169; 2025 T. Valentine`;
  }
};

createHeader();
createFooter();

//console.log(document.querySelector("#body"));
