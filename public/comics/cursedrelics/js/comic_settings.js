let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 5; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files.
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "../../assets/comics/cursedrelics"; //directory of the folder where you keep all the comics
const image = ""; //what you'll name all your comic pages
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "assets/thumbs"; //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png"; //file extension of thumbnails
const thumbDefault = "default"; //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First", "Previous", "Next", "Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "../../assets/comics/comicnav"; //directory where nav images are stored
const navExt = "png"; //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {
  pg = maxpg;
} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

const pgData = [
  {
    pgNum: 1, //what page number it is
    altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
  },
  {
    pgNum: 2,
    altText: "",
  },
  {
    pgNum: 3,
    altText: "",
  },
  {
    pgNum: 4,
    altText: "",
  },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) {
  //function used to write a parameter to append to the url, to give each comic page its own unique url
  let result = null,
    tmp = [];
  let items = location.search.substr(1).split("&");
  for (let index = 0; index < items.length; index++) {
    tmp = items[index].split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  }
  return result;
}

function writeDate(year, month, day) {
  //write date of comic page
  const date = new Date(year, month - 1, day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4); //remove the Day
  return date;
}
