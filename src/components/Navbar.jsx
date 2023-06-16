import { Box, Stack, Typography, Button, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [state, setState] = useState(false);
  const { savedAmount } = useGlobalContext();
  return (
    <>
    <Stack
      width={"100vw"}
      height={"80px"}
      position={"absolute"}
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <NavLink to="/">
        <Typography
          fontSize={"24px"}
          fontWeight={600}
          fontStyle={"italic"}
          color={"white"}
        >
          IMDB 100
        </Typography>
      </NavLink>
      <Button
        onClick={() => setState(!state)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon sx={{ color: "white", fontSize: "3rem" }} />
      </Button>
      <Stack direction={"row"} spacing={"50px"} sx={{ display: { xs: "none", sm: "flex" } }}>
        <NavLink className='navlink' to="/">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"white"}
            sx={{'&:hover': {color:'primary.main'}}}
          >
            HOME
          </Typography>
        </NavLink>
        <NavLink to="/top100">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"white"}
            sx={{'&:hover': {color:'primary.main'}}}
          >
            TOP 100
          </Typography>
        </NavLink>
        <NavLink to="/saved">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"white"}
            display={"inline"}
            sx={{'&:hover': {color:'primary.main'}}}
          >
            SAVED:
          </Typography>{" "}
          <Typography
            sx={{
              backgroundColor: "white",
              paddingX: "10px",
              marginLeft: "5px",
              borderRadius: "5px",
            }}
            display={"inline"}
            fontSize={"18px"}
            fontWeight={600}
            fontStyle={"italic"}
            color={"primary.main"}
          >
            {savedAmount}
          </Typography>
        </NavLink>
      </Stack>
    </Stack>
    <Drawer anchor={"top"} open={state} onClose={() => setState(!state)}>
    <Stack padding={'50px'} spacing={'40px'} alignItems={'center'}>
        <NavLink onClick={()=>setState(false)} to="/">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"black"}
          >
            HOME
          </Typography>
        </NavLink>
        <NavLink onClick={()=>setState(false)} to="/top100">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"black"}
          >
            TOP 100
          </Typography>
        </NavLink>
        <NavLink onClick={()=>setState(false)} to="/saved">
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontStyle={"italic"}
            color={"black"}
            display={"inline"}
          >
            SAVED:
          </Typography>{" "}
          <Typography
            sx={{
              backgroundColor: "white",
              paddingX: "10px",
              marginLeft: "5px",
              borderRadius: "5px",
            }}
            display={"inline"}
            fontSize={"18px"}
            fontWeight={600}
            fontStyle={"italic"}
            color={"primary.main"}
          >
            {savedAmount}
          </Typography>
        </NavLink>
      </Stack>
    </Drawer>
    </>
  );
};
export default Navbar;
