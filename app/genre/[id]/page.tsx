 type Props={
    params:{
        id:string
    };
    searchParams:{
        genre: string
    };
 }
 
 function GenrePage({params:{id } ,searchParams: {genre}} : Props) {
   
  return (
    <div>Welcome to the genre with ID : {id} and genre : {genre}</div>
  )
}

export default GenrePage