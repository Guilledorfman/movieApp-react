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
function copy(){
  let textDOM = document.createElement('textarea');
      document.body.appendChild(textDOM);
      textDOM.value =`✨${timeLine[0].title} (${timeLine[0].subtitle.slice(0,4)})
⬇️${timeLine.length - 2} steps⬇️
✨${timeLine[timeLine.length - 1].title}  (${timeLine[timeLine.length - 1].subtitle.slice(0,4)})
      
🎬see if you can do it better:
      
💻${window.location.href}`;

      textDOM.select();
      document.execCommand('copy');
      document.body.removeChild(textDOM);
}
  return (
      <div className="TimeLineCont">
      <h2>You connected the movies in only {timeLine.length - 2} steps!</h2>
        <button onClick={copy}>SHARE</button>
        <h3>See if you can find a shorter path</h3>
        <button>REPLAY</button>
        {showTimeLine}
      </div>


  )
};

export default TimeLineCont;
