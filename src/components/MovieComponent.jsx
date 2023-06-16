import { Button, Rating, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AddCircle, CheckCircle, Star, TrendingUp, Delete } from "@mui/icons-material";
import { useGlobalContext } from "../context";

const MovieComponent = ({ movie, deleteFlag }) => {
  const { movies, setMovies } = useGlobalContext();
  const handleClick = () => {
    let newList = movies.map((item) => {
      if (item.id === movie.id) {
        return { ...item, saved: !item.saved };
      }
      return item;
    });
    localStorage.setItem("movies", JSON.stringify(newList));
    setMovies(newList);
  };
  return (
    <Stack
      width={"300px"}
      paddingBottom={"30px"}
      alignItems={"center"}
      position={"relative"}
      sx={{
        backgroundColor: "black",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      justifyContent={"space-between"}
    >
      <Link to={`/movie/${movie.id}`}>
        <img width="100%" src={movie.image} alt="" />
        <Typography
          textAlign={"center"}
          fontSize={"14px"}
          fontWeight={600}
          letterSpacing={"4px"}
          fontStyle={"italic"}
          color={"white"}
          padding={"10px 10px"}
        >
          {movie.genre.map((item) => (
            <span key={item}> /{item} </span>
          ))}
        </Typography>
        <Typography
          lineHeight={"50px"}
          textAlign={"center"}
          fontSize={"24px"}
          padding={"5px 10px"}
          fontWeight={400}
          fontStyle={"italic"}
          color={"primary.main"}
        >
          {movie.title}
        </Typography>
      </Link>
      <Stack direction={"row"} justifyContent={"space-around"} width={'100%'}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          width={"100%"}
          alignItems={"center"}
          spacing={"10px"}
        >
          <TrendingUp sx={{ fontSize: "32px", color: "#3f51b5" }} />
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"white"}
            padding={"10px"}
          >
            {movie.rank}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          width={"100%"}
          alignItems={"center"}
          spacing={"15px"}
        >
          <Star sx={{ fontSize: "32px", color: "gold" }} />
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"white"}
          >
            {movie.rating}
          </Typography>
        </Stack>
      </Stack>
      <Button
        sx={{
          position: "absolute",
          right: "0",
          background: "black",
          borderRadius: "0px",
          borderBottomLeftRadius: "20px",
          '&:hover': {background: 'white'}
        }}
        onClick={() => handleClick()}
      >
        {!movie.saved?<AddCircle sx={{ fontSize: "50px" }} />:(deleteFlag?<Delete sx={{ fontSize: "50px" }} />:<CheckCircle sx={{ fontSize: "50px" }} />)}
      </Button>
    </Stack>
  );
};
export default MovieComponent;
