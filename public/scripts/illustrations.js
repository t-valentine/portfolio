function ChangeCallout(sourceUrl, altText) {
  illustrationYear = altText.split(" ").slice(-1);
  document.getElementById("callout-illu").src = sourceUrl;
  document.getElementById("callout-title").innerHTML = illustrationYear;
}
