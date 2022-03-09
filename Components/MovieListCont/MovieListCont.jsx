
import React,{useState, useEffect} from 'react';
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

import './MovieListCont.scss'

const MovieListCont = ({id}) => {

    const [ people_id, setPeople_id ] = useState(id)
    const [ loading, setLoading ] = useState(true)
    const [ movieList, setMovieList ] = useState({})

    const [ totalPages, setTotalPages ] = useState(1)
    const [page, setPage] =useState(1)
    
    
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

    useEffect( async ()=>{
        const response = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${id}&sort_by=vote_count.desc&page=${page}`)
        const data = await response.json()
        showList(data);
        setTotalPages(data.total_pages)

    }, [people_id] )

    useEffect( async ()=>{
        const response = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${id}&sort_by=vote_count.desc&page=${page}`)
        const data = await response.json()
        showList(data);
        setTotalPages(data.total_pages)
    },[page])


    function showList(data){
        setMovieList(data)
        setLoading(false)
    }

  return (
      <>
      {totalPages > 1 ?
      <Pagination pages={totalPages} setPage={setPage} currentPage={page}/>
      : <></>
      }
        <div className="movielist-cont">
            { loading ? <>LOADING</> : <MovieList
            data={movieList}
            /> }
        </div>
  
  </>
    );
};

export default MovieListCont;
