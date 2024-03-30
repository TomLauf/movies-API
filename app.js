let input = document.querySelector("input");
let movieInfo = document.querySelectorAll("div")[2];
let moviePoster = document.querySelector("img");
let pArray = document.querySelectorAll("p");
let movieTitle = document.querySelectorAll("p")[0];
let genre = document.querySelectorAll("p")[1];
let year = document.querySelectorAll("p")[2];
let plot = document.querySelectorAll("p")[3];
let director = document.querySelectorAll("p")[4];
let actors = document.querySelectorAll("p")[5];
let errorMsg = document.querySelectorAll("p")[6];
let h2Array = document.querySelectorAll("h2");
let span = document.querySelector("span");

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    getMovie(input.value);
  }
});

async function getMovie(movieName) {
  const apiKey = "2c06c667";
  let response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`);
  let data = await response.json();
  console.log(data);
  movieInfo.style.visibility = "visible";
  if(data.Response == "False"){
    moviePoster.src = "";
    for (let i = 0; i < pArray.length-1; i++){
      pArray[i].innerText = "";
    }
    for (let i of h2Array){
      i.style.display = "none";
    }
    errorMsg.innerText = data.Error + " please try again";
    span.style.display="inline";
  }else{
    for (let i of h2Array){
      i.style.display = "inline";
    }
    if(data.Poster == "N/A"){
      moviePoster.src = "";
    }else{
      moviePoster.src = data.Poster;
    }
    movieTitle.innerText = data.Title;
    genre.innerText = data.Genre;
    year.innerText = data.Year;
    plot.innerText = data.Plot;
    director.innerText = data.Director;
    actors.innerText = data.Actors;
    errorMsg.innerText = "";
    span.style.display="none";
  }
}