var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var site_data = JSON.parse(this.responseText);
    document.getElementById("hitcount").innerHTML = site_data.info.views;
    var date_str = site_data.info.last_updated;
    var date_obj = new Date(date_str);
    document.getElementById("lastupdate").innerHTML =
      date_obj.getMonth() +
      1 +
      "-" +
      date_obj.getDate() +
      "-" +
      date_obj.getFullYear();
  }
};
xhttp.open(
  "GET",
  "https://weirdscifi.ratiosemper.com/neocities.php?sitename=h0neymice",
  true
);
xhttp.send();
