import React,{useState, useEffect} from 'react';
import MovieList from '../MovieList/MovieList';

const MovieListCont = ({id}) => {

    const [ people_id, setPeople_id ] = useState(id)
    const [ loading, setLoading ] = useState(true)
    const [ movieList, setMovieList ] = useState({})
    
    
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

    useEffect( async ()=>{
        const response = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${id}&sort_by=vote_count.desc`)
        const data = await response.json()
        showList(data);

    }, [people_id] )


    function showList(data){
        setMovieList(data)
        setLoading(false)
    }

  return (
  
    <div>
        { loading ? <>LOADING</> : <MovieList
         data={movieList}
         /> }
    </div>
    );
};

export default MovieListCont;
