import { Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieComponent from "../components/MovieComponent";

const Saved = () => {
  const navigate = useNavigate();
  const { movies } = useGlobalContext();
  const [savedMovies, setSavedMovies] = useState([]);
  useEffect(() => {
    if (movies.length > 0) {
      setSavedMovies(movies.filter((item) => item.saved === true));
    } else {
      navigate("/top100");
    }
  }, [movies]);
  return (
    <Stack
      minHeight={"100vh"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={'50px'}
      justifyContent={'center'}
      padding={'120px 80px'}
    >
      {savedMovies.length>0?
      savedMovies.map((movie) => {
        return <MovieComponent key={movie.id} movie={movie} deleteFlag={true} />
      }):<Typography marginTop={'200px'} fontSize={'24px'} fontWeight={400} fontStyle={'italic'} color={'white'}>No saved movies</Typography>}
    </Stack>
  );
};
export default Saved;
