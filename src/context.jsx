import { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import fetchMovies from "./utilities/fetchMovies";
import { ThemeProvider, createTheme } from "@mui/material";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#26a69a",
      },
    },
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [movies, setMovies] = useState([]);

  const [randomMovie, setRandomMovie] = useState({});

  const [visibleMovies, setVisibleMovies] = useState([]);

  const [savedAmount, setSavedAmount] = useState(0);

  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem("movies"));
    if (localMovies) {
      setMovies(localMovies);
    } else {
      fetchMovies();
    }
  }, []);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomItem = movies.find((item) => item.rank === randomNumber);
    setRandomMovie(randomItem);
    const num = movies.reduce((sum, curr) => {
      if (curr.saved === true) {
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
    setSavedAmount(num);
  }, [movies]);

  useEffect(() => {
    if (movies.length > 0) {
      const lastItem = currentPage * 12;
      const firstItem = lastItem - 12;
      setVisibleMovies(movies.slice(firstItem, lastItem));
    }
  }, [currentPage, movies]);

  return (
    <GlobalContext.Provider
      value={{
        randomMovie,
        visibleMovies,
        currentPage,
        setCurrentPage,
        movies,
        setMovies,
        savedAmount,
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default AppContext;
