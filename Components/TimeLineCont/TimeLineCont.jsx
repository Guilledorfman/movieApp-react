import React,{useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import TimeLine from '../TimeLine/TimeLine';

import './TimeLineCont.css'

const TimeLineCont = () => {

    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID,compareIds, personID, timeLine } = useContext(MovieListContext)

    const showTimeLine =  timeLine.map((e, index)=>{
        return(
            <TimeLine key={index} img={e.img} title={e.title} subtitle={e.subtitle} index={index}/>
        )
    })

  return (
      <div className="TimeLineCont">
      <h2>This is your path</h2>
        {showTimeLine}
      </div>


  )
};

export default TimeLineCont;
