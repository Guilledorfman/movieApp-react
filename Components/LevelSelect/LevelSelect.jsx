import React, {useState, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import MainCont from '../MainCont/MainCont';

const LevelSelect = () => {
  const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, endMovieID, setEndMovieID, personID } = useContext(MovieListContext)
    const [ selected, setSelected ] = useState(false);

    function pickMovies(a, b){
        setMovieID(a);
        setEndMovieID(b);
        setSelected(true)
    }

  return (
    <>
        { 
            selected ?
            <MainCont/>
            :
            <>
              <button onClick={()=>pickMovies(120, 671)}>LOTR to HP</button>
              <button onClick={()=>pickMovies(36647, 603)}>BLADE to MATRIX</button>
              <button onClick={()=>pickMovies(497, 10734)}>GREEN MILE to ESCAPE FROM ALCATRAZ</button>
              <button onClick={()=>pickMovies(11, 152)}>STAR WARS to STAR TREK</button>
            </>
        }
    </>

  );
};

export default LevelSelect;
