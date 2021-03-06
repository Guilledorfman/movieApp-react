import React, { useState } from 'react';
import LevelsCont from '../LevelsCont/LevelsCont';
import MainCont from '../MainCont/MainCont';
import RandomMoviesCont from '../RandomMoviesCont/RandomMoviesCont';
import './LevelSelect.scss'

const LevelSelect = () => {
    const [ selected, setSelected ] = useState(false);

    const lvls = [
      {
        a : 841,
        b : 438631
      },
      {
        a: 13651,
        b: 265195 
      },
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
      }
    ]

  return (
    <>
        { 
            selected ?
              <MainCont/>
            :
            <>
              <RandomMoviesCont setSelected={setSelected}/>

              <LevelsCont lvls={lvls} setSelected={setSelected}/>
            </>
        }
    </>

  );
};

export default LevelSelect;
