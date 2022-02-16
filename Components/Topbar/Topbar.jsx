import React, {useContext} from 'react'
import './Topbar.scss'
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { MovieListContext } from '../../context/MovieListContext';

const Topbar = () => {
  const { setEndGame, setTimeLine, setShowMovieList } = useContext(MovieListContext)
  
  const location = useLocation();
  
function resetGame(){
  setEndGame(false)
  setShowMovieList(false)
  setTimeLine([])
}

  return (
    <div className="topbar"> 
      <div className="buttons">
        { location.pathname === '/' ? <></> :
          <button onClick={()=>resetGame()} className='left'><Link to={'/'}><ArrowBackIcon className="icon" /><b>BACK</b></Link></button>
        }
        <button className='right'><InfoIcon className="icon" /><b>HOW TO PLAY</b></button>
      </div>
        <div className="title-cont">
          <h1 className="title">Movie<b>2</b>Movie</h1>
          <h3>-SIX DEGREES OF MOVIES-</h3>
        </div>
    </div>
  )
}

export default Topbar