import React,{useContext, useState} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
import TimeLine from '../TimeLine/TimeLine';
import { Link } from 'react-router-dom';

import './TimeLineCont.scss'

import { useParams } from 'react-router-dom'


const TimeLineCont = () => {

  
  const { from, to } = useParams();

  const { setShowMovieList, setMovieID, movieID, setEndGame, setTimeLine } = useContext(MovieListContext)
  
    const { timeLine } = useContext(MovieListContext)

    const [ alertClass, setAlertClass ] = useState("")

    const showTimeLine =  timeLine.map((e, index)=>{
        return(
            <TimeLine key={index} img={e.img} title={e.title} subtitle={e.subtitle} index={index}/>
        )
    })
function copy(){
  showAlert()

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
function showAlert(){
  setAlertClass("visible")
  setTimeout(()=>{
    setAlertClass("")
  },[3000])
}
function startGame(){
  setMovieID(from)
  setShowMovieList(false);
  setEndGame(false)
  setTimeLine([])
}

  return (
      <div className="TimeLineCont">
        <h4 className={alertClass}>-COPIED TO CLIPBOARD-</h4>
        <h2>You connected the movies in only {timeLine.length - 2} steps!</h2>
        <div className="buttons">
          <button onClick={copy}>SHARE</button>
          <button onClick={()=>startGame()}><Link to={`/play/${from}/${to}`}>REPLAY</Link></button>
        </div>
        <h3>See if you can find a shorter path</h3>
          {showTimeLine}
      </div>


  )
};

export default TimeLineCont;
