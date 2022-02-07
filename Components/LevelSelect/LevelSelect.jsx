import React, {useState, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import LevelsCont from '../LevelsCont/LevelsCont';
import MainCont from '../MainCont/MainCont';
import './LevelSelect.css'

const LevelSelect = () => {
  const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID, endMovieID, setEndMovieID, personID } = useContext(MovieListContext)
    const [ selected, setSelected ] = useState(false);

    const lvls = [
      {
        a : 120,
        b : 671
      },
      {
        a : 36647,
        b : 603
      },
      {
        a : 497,
        b : 10734
      },
      {
        a : 11,
        b : 152
      },
      {
        a : 101,
        b : 142
      },
      {
        a : 666,
        b : 320
      },
      {
        a : 841,
        b : 438631
      }
    ]

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
            {/* <h1 className="title">Movie Game</h1>
            <div className="levels-cont">
              <h2>Challenges</h2>
              <div className="levels">
                <button className="level" onClick={()=>pickMovies(120, 671)}>
                  <div>
                    lotr
                  </div>
                  <div>
                    hp
                  </div>
                </button>
                <button className="level" onClick={()=>pickMovies(36647, 603)}>BLADE to MATRIX</button>
                <button className="level" onClick={()=>pickMovies(497, 10734)}>GREEN MILE to ESCAPE FROM ALCATRAZ</button>
                <button className="level" onClick={()=>pickMovies(11, 152)}>STAR WARS to STAR TREK</button>
              </div>
            </div> */}
            <LevelsCont lvls={lvls} setSelected={setSelected}/>
            </>
        }
    </>

  );
};

export default LevelSelect;
