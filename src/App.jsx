import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
const API_key = '89bdf090'
function App(){
  const [searchText, setSearchText] = useState('') ; 
  const Trim = setSearchText.trim()

  useEffect(() => {
if(!Trim) {
  return;
}if(!API_key){
  return;
}
const controll = new AbortController(); 
async function fetchMovie(){
try{
  const FetchData = fetch(`https://www.omdbapi.com/apikey=${API_key}&s=${searchText}`);
 }catch(err){

}finally{

}
}
  } , [Trim])
  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App