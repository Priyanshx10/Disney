import { Genres } from "@/typing";

async function GenreDropDown() {
const url ="https://api.themoviedb.org/3/genre/movie/list?language= "

 const options: RequestInit ={
    method:"GET",
    headers:{
        accept:"application/json",
        Authorization:`Bearer ${process.env.TMDB_API_KEY}`,
    },
    next:{
        revalidate: 60 * 60 * 24 , //24 hour
    }
};

 const response  = await fetch (url , options)
 const data =(await response.json()) as Genres

  return (
    <div>GenreDropDown</div>
  )
}

export default GenreDropDown