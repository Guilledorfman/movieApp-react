import React,{useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import TimeLine from '../TimeLine/TimeLine';

const TimeLineCont = () => {

    const { showMovieList, getFetch, movieList, activeDisplay, setActiveDisplay, movieID, setMovieID,compareIds, personID, timeLine } = useContext(MovieListContext)

    const showTimeLine =  timeLine.map(e=>{
        return(
            <TimeLine key={e.id} img={e.img} title={e.title} subtitle={e.subtitle}/>
        )
    })

  return (
      <>
        {showTimeLine}
      </>


  )
};

export default TimeLineCont;
