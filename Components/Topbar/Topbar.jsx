import React, {useContext} from 'react'
import './Topbar.scss'
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

import { MovieListContext } from '../../context/MovieListContext';

const Topbar = () => {
  const { setEndGame, setTimeLine, setShowMovieList } = useContext(MovieListContext)
  
function resetGame(){
  setEndGame(false)
  setShowMovieList(false)
  setTimeLine([])
}

  return (
    <div className="topbar"> 
      <div className="buttons">
        <button onClick={()=>resetGame()} className='left'><Link to={'/'}>BACK</Link></button>
        <button className='right'><InfoIcon/>HOW TO PLAY</button>
      </div>
        <div className="title-cont">
          <h1 className="title">Movie<b>2</b>Movie</h1>
          <h3>-SIX DEGREES OF MOVIES-</h3>
        </div>
    </div>
  )
}

export default Topbar