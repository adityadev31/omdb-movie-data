const fetch = require("node-fetch");
const fs = require("fs");

const outputs = [];
const API_KEY = ["bf4692e4","a0010e61","e4e5dad9","3cbca18a"];

const getMovieId = (ID) => ID.toString().padStart(8, "0");  // size = 8

async function fetchMoviesJSON(MovieID) {
  await fetch(
    `http://www.omdbapi.com/?i=tt${getMovieId(MovieID)}&apikey=${API_KEY[3]}&plot=full`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      outputs.push(json);
    });
}

for(let i=1117000; i<=1118000; i++){             // 10000000  (8-digits)
   fetchMoviesJSON(i).then(() => {
      fs.writeFile("./omdb.json", JSON.stringify(outputs, null, 2), (err) => {
        if (err) console.log("e r r o r ..............");
        else console.log("file success");
      });
   });
}

