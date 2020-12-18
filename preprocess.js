const data = require("./omdb.json");
const ObjectsToCsv = require("objects-to-csv");

const finalData = [];

const n = data.length;

for (let i = 0; i < n; i++) {
  if ("Plot" in data[i] && data[i].Plot !== "N/A" && data[i].Genre !== "N/A") {
    let refined = {
      IMDBID: data[i].imdbID,
      Title: data[i].Title,
      Plot: data[i].Plot,
      Genres: data[i].Genre,
    };
    finalData.push(refined);
  }
}

// json => csv
(async () => {
  const csv = new ObjectsToCsv(finalData);
  await csv.toDisk("./test.csv");   // Save to file:
  console.log(await csv.toString());   // Return the CSV file as string:
})();



/*


  Title: 'Awakening of Rip',       
  Year: '1896',
  Rated: 'NOT RATED',
  Released: '01 Sep 1896',
  Runtime: 'N/A',
  Genre: 'Drama, Short',
  Director: 'William K.L. Dickson',
  Writer: 'N/A',
  Actors: 'Joseph Jefferson',
  Plot: 'A series of short black and white films from director William K.L. Dickson which chronicle the adventures of Rip Van Winkle.',
  Language: 'N/A',
  Country: 'USA',
  Awards: '1 win.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BZWM1OGIxYzYtMzI1ZC00NDZmLWEzNmMtOTc2Y2JjNTQ0NDAyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg',
  Metascore: 'N/A',
  imdbRating: '4.5',
  imdbVotes: '411',
  imdbID: 'tt0000036',
  Type: 'movie',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True'

*/
