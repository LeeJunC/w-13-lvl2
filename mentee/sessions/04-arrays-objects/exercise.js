// 1. Parsons
const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};

// Goal output: `Cloudy` — one step per line.

const days = weather.days; // A
const tuesday = days[1]; // B
console.log(tuesday.condition); // C


// 2. Modify
const playlist = [
  {
    title: "SWEET SOUR",
    artist: "KiiiKiii",
    goated: true,
    genres: ["Pop", "K-Pop"]
  },
  {
    title: "Illusion",
    artist: "Dua Lipa",
    goated: true,
    genres: ["Pop"]
  },
  {
    title: "Go",
    artist: "Adela",
    goated: true,
    genres: ["Pop", "Electronic", "Hyperpop"]
  }
];

const getTitle = (song) => song.title;

function getGenres(song){
  return song.genres;
}

function addGenre(song, genre){
  song.genres.push(genre);
}

console.log(getTitle(playlist[0]));

console.log(getGenres(playlist[2]));

const favSong = playlist[1];
favSong.goated = false;
console.log(playlist[1].goated);

addGenre(playlist[1], "Country");
console.log(playlist[1].genres[1]);


// I predict that the final console.log will display country. This is true while f(x) doesn't work because x was a simple integer that is 
// easy to copy and have the function use a copy of that, while JS passes objects by reference instead, I'm pretty sure.