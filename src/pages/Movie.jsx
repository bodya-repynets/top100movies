import { Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";

const Movie = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const {movies} = useGlobalContext();
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        if(movies.length>0){
            setMovie(movies.find(item=>item.id===id))
        }else{
            navigate('/top100')
        }
    },[])
  return (
    <Stack sx={{margin: {'xs': '80px auto', 'md': '80px'}, padding: {'xs': '40px 0px', 'md': '40px'}}}  alignItems={'center'} spacing={'50px'}>
        <Stack sx={{flexDirection: {'xs': 'column', 'md': 'row'}, alignItems: {'xs': 'center', 'md': 'stretch'}}} width={'100%'}  justifyContent={'center'}>
        <img className="imgMovie" src={movie.image} alt="" />
        <Stack alignItems={'center'} spacing={'10px'} sx={{background:'rgba(255,255,255,0.2)', padding: '30px', width: {'xs': '300px', 'sm': '350px', 'md': '400px'},}} justifyContent={'center'}>
            <Typography textAlign={'center'} color={'primary.main'} fontSize={'24px'}>Name: {movie.title}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Genre: {movie.genre}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Year: {movie.year}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Director: {movie.director}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Rank: {movie.rank}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Rating: {movie.rating}</Typography>
            <Typography color={'white'} fontSize={'20px'}>Description: {movie.description}</Typography>
        </Stack>
        </Stack>
    <iframe
        className="framevideo"
        src={movie.trailer}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Stack>
  )
}
export default Movie