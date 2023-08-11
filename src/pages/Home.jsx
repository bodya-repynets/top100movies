import { Button, Stack, Typography } from "@mui/material";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { randomMovie } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <Stack height={"100vh"} padding={"120px 80px"}>
      <Stack height={"100%"} direction={"row"}>
        <Stack
          sx={{
            width: { xs: "100%", md: "70%" },
            marginTop: { xs: "50px", md: "0px" },
          }}
          justifyContent={"center"}
          spacing={"50px"}
          paddingX={"10%"}
        >
          <Typography
            sx={{ fontSize: { xs: "24px", md: "32px" } }}
            fontWeight={600}
            fontStyle={"oblique"}
            color={"white"}
            textAlign={"center"}
          >
            Top 100 movies of all times that you should watch immediately
          </Typography>
          <Button variant="contained" onClick={() => navigate("/top100")}>
            Check them now
          </Button>
        </Stack>
        {randomMovie && (
          <Stack
            sx={{
              width: { xs: "100%", md: "40%" },
              display: { xs: "none", md: "flex" },
            }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={"20px"}
          >
            <Button
              sx={{
                height: "80%",
                padding: "0px",
                "&:hover": { background: "none", border: "3px solid white" },
              }}
              onClick={() => navigate(`/movie/${randomMovie.id}`)}
            >
              <img
                height={"100%"}
                src={randomMovie.image}
                alt="random movie image"
              />
            </Button>
            <Typography
              fontSize={"16px"}
              fontWeight={400}
              fontStyle={"italic"}
              color={"white"}
            >
              Random movie for you
            </Typography>
            <Typography
              fontSize={"16px"}
              fontWeight={400}
              fontStyle={"italic"}
              color={"white"}
            >
              Rank: {randomMovie.rank}/100
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export default Home;
