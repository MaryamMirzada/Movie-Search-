import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
const API_key = '89bdf090'
function App(){
  const [searchText, setSearchText] = useState('') ; 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [Movies, setMovies] = useState([]);

  const Trim = setSearchText.trim();

  useEffect(() => {
    if (!Trim) {
      setError("");
      setLoading(false);
      setMovies([]);
      return;
    }
    if (!API_key) {
      setError("missing ADPI API");
      setLoading(false);
      setMovies([]);
      return;
    }
    const controll = new AbortController();
    async function fetchMovie() {
      try {
        setLoading(true);
        setError("");
        const FetchData =  await fetch(
          `https://www.omdbapi.com/apikey=${API_key}&s=${searchText}`{
            signal : controll.signal
          }
          
        );
        const data = await FetchData.json()
        if(data.Response === 'false'){
          setMovies([])
          setError(data.error) || 'No results'
        }
        setMovies(data.search || [])
      } catch (err) {
        setError("Fail to fetch movie");
      } finally {
        setLoading(false);
      }
    }
      fetchMovie() ;
      return () => controll.abort()  }, [Trim]);



  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App