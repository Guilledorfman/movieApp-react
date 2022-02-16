import React,{useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import TimeLine from '../TimeLine/TimeLine';

import './TimeLineCont.css'

const TimeLineCont = () => {

    const { timeLine } = useContext(MovieListContext)

    const showTimeLine =  timeLine.map((e, index)=>{
        return(
            <TimeLine key={index} img={e.img} title={e.title} subtitle={e.subtitle} index={index}/>
        )
    })

  return (
      <div className="TimeLineCont">
      <h2>{timeLine.length - 2} is your best path.</h2>
        <h3>See if you can find a shorter path!</h3>
        {showTimeLine}
      </div>


  )
};

export default TimeLineCont;
