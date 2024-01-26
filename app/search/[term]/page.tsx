import { notFound } from "next/navigation";

type Props ={
  params:{
    term:string;
  };
};
function SearchPage({params:{ term }} : Props) {
  if(!term) notFound();

  const termtoUse =decodeURI( term);
 
  //API call for get the Seached Movies 
 //API call for get Popular Movies
  return (
    
    <div>Welcome to The Search Page:{termtoUse}</div>
  )
}

export default SearchPage