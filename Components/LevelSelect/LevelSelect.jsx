import React, {useState, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import LevelsCont from '../LevelsCont/LevelsCont';
import MainCont from '../MainCont/MainCont';
import RandomMoviesCont from '../RandomMoviesCont/RandomMoviesCont';
import './LevelSelect.scss'

const LevelSelect = () => {
  const { setMovieID, setEndMovieID } = useContext(MovieListContext)
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
              <div className="random-cont">
                <RandomMoviesCont setSelected={setSelected}/>
              </div>
            <div className="levels-cont">
              <div className="levels">
              </div>
            </div>
            <LevelsCont lvls={lvls} setSelected={setSelected}/>
            </>
        }
    </>

  );
};

export default LevelSelect;
