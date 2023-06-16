import axios from "axios";
const options = {
  method: "GET",
  url: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "c7d76f028amsh866edfc2a6eec90p1c3382jsnbe5eb8052945",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
const fetchMovies = async () => {
  try {
    const response = await axios.request(options);
    const changedMovies=response.data.map(item=>{
      return {...item, saved: false}
  })
    console.log(changedMovies);
    localStorage.setItem("movies", JSON.stringify(changedMovies));
  } catch (error) {
    console.error(error);
  }
};
export default fetchMovies;
