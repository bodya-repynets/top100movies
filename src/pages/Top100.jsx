import { Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
import PaginationComponent from "../components/PaginationComponent";
import MovieComponent from "../components/MovieComponent";

const Top100 = () => {
  const { visibleMovies } = useGlobalContext();
  return (
    <Stack
      margin={"80px"}
      paddingTop={'40px'}
      minHeight={"100vh"}
      justifyContent={"space-between"}
      alignItems={'center'}
      spacing={'80px'}
    >
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={'center'} gap={'50px'}>
        {visibleMovies.map((movie) => {
          return <MovieComponent key={movie.id} movie={movie} deleteFlag={false} />;
        })}
      </Stack>
      <PaginationComponent />
    </Stack>
  );
};
export default Top100;
