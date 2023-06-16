import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Stack } from "@mui/material"

const MainContainer = () => {
  return (
    <Stack>
    <Navbar/>
    <Outlet/>
    </Stack>
  )
}
export default MainContainer