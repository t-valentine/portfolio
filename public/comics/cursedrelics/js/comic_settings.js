let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 28; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files.
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "../../assets/comics/cursedrelics"; //directory of the folder where you keep all the comics
const image = ""; //what you'll name all your comic pages
const imgPart = "_"; //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "webp"; //file extension of your comic pages

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
    altText: "",
    notes: "Week 1, Prompt 1: Longsword (page 1/4)",
  },
  {
    pgNum: 2,
    altText: "",
    notes: "Week 1, Prompt 1: Longsword (page 2/4)",
  },
  {
    pgNum: 3,
    altText: "",
    notes: "Week 1, Prompt 1: Longsword (page 3/4)",
  },
  {
    pgNum: 4,
    altText: "",
    notes: "Week 1, Prompt 1: Longsword (page 4/4)",
  },
  {
    pgNum: 5,
    altText: "",
    notes: "Week 1, Prompt 2: Chimera",
  },
  {
    pgNum: 6,
    altText: "",
    notes: "Week 1, Prompt 3: Wings",
  },
  {
    pgNum: 7,
    altText: "",
    notes: "Week 2, Prompt 1: Crown",
  },
  {
    pgNum: 8,
    altText: "",
    notes: "Week 2, Prompt 2: Goblet",
  },
  {
    pgNum: 9,
    altText: "",
    notes: "Week 2, Prompt 3: Mask (page 1/3)",
  },
  {
    pgNum: 10,
    altText: "",
    notes: "Week 2, Prompt 3: Mask (page 1/3)",
  },
  {
    pgNum: 11,
    altText: "",
    notes: "Week 2, Prompt 3: Mask (page 2/3)",
  },
  {
    pgNum: 12,
    altText: "",
    notes: "Week 3, Prompt 1: Ouroboros",
  },
  {
    pgNum: 13,
    altText: "",
    notes: "No longer following the prompts as closely. Published on 1/6",
  },
  {
    pgNum: 14,
    altText: "",
    notes: "Published on 1/8",
  },
  {
    pgNum: 15,
    altText: "",
    notes: "Published on 1/13",
  },
  {
    pgNum: 16,
    altText: "",
    notes: "Published on 1/15",
  },
  {
    pgNum: 17,
    altText: "",
    notes: "Published on 1/20",
  },
  {
    pgNum: 18,
    altText: "",
    notes: "Published on 1/22",
  },
  {
    pgNum: 19,
    altText: "",
    notes: "Published on 1/27",
  },
  {
    pgNum: 20,
    altText: "",
    notes: "Published on 1/29",
  },
  {
    pgNum: 21,
    altText: "",
    notes: "Published on 2/3",
  },
  {
    pgNum: 22,
    altText: "",
    notes: "Published on 2/5",
  },
  {
    pgNum: 23,
    altText: "",
    notes: "Published on 2/10",
  },
  {
    pgNum: 24,
    altText: "",
    notes: "Published on 2/12",
  },
  {
    pgNum: 25,
    altText: "",
    notes: "Published on 2/19",
  },
  {
    pgNum: 26,
    altText: "",
    notes: "Published on 2/25",
  },
  {
    pgNum: 27,
    altText: "",
    notes: "Published on 2/25",
  },
  {
    pgNum: 28,
    altText: "",
    notes: "Published on 3/3",
  },
  {
    pgNum: 29,
    altText: "",
    notes: "Published on 3/5",
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
