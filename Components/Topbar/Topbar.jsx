import React, {useContext, useState} from 'react'
import './Topbar.scss'
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { MovieListContext } from '../../context/MovieListContext';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';

const Topbar = () => {
  const { setEndGame, setTimeLine, setShowMovieList } = useContext(MovieListContext)

  const [ tutorialVisible, setTutorialVisible ] = useState(false)
  
  const location = useLocation();
  
function resetGame(){
  setEndGame(false)
  setShowMovieList(false)
  setTimeLine([])
}

function showHideTutorial(){
  setTutorialVisible(!tutorialVisible);
}

  return (
    <div className="topbar"> 
      <div className={tutorialVisible ? "tutorialCont active" : "tutorialCont"}>
        <div className="tutorial">
            <CloseIcon onClick={showHideTutorial} className="closeIcon" />
            <p><QuestionMarkIcon/> </p>
            <p>Pick two movies and find a path that connects them.</p>
            <p>Click on the <SavedSearchIcon/> icon to see the people that worked on that movie. </p>
            <p>Then pick somebody to see what other movies that person worked on.</p>
            <p>The goal is to connect the two movies in the least amount of moves.</p>
            <p>Share your results and challenge a friend!</p>
          </div>
      </div>
      <div className="buttons">
        { location.pathname === '/' ? <></> :
          <button onClick={()=>resetGame()} className='left'><Link to={'/'}><ArrowBackIcon className="icon" /><b>BACK</b></Link></button>
        }
        <button className='right' onClick={showHideTutorial}><InfoIcon className="icon" /><b>HOW TO PLAY</b></button>
      </div>
        <div className="title-cont">
          <h1 className="title">Movie<b>2</b>Movie</h1>
          <h3>-SIX DEGREES OF MOVIES-</h3>
        </div>
    </div>
  )
}

export default Topbar