import React, { useEffect, useContext} from 'react';
import { MovieListContext } from '../../context/MovieListContext';
// import CreditsCont from '../CreditsCont/CreditsCont';
// import LevelSelect from '../LevelSelect/LevelSelect';
import MovieEndCont from '../MovieEndCont/MovieEndCont';
// import MovieListCont from '../MovieListCont/MovieListCont';
import MovieStartCont from '../MovieStartCont/MovieStartCont';
import TimeLineCont from '../TimeLineCont/TimeLineCont';

import { useParams } from 'react-router-dom'

const MainCont = () => {
  
  const { endGame, setMovieID } = useContext(MovieListContext)

    const { from, to } = useParams();

    useEffect(()=>{
      setMovieID(from)
    },[from])


    console.log(from, to);




    // function changeActive(e){
    //     setActiveDisplay(e)
    // }


    // function renderSwitch(param){
    //     switch(param) {
    //         case 'lvlselect':
    //             return(<LevelSelect/>);
    //             break;
    //         case 'movie':
    //             return(<MovieStartCont movie_ID={movieID}/>);
    //             break;
    //         case 'creditsList':
    //             return(<CreditsCont movie_ID={movieID}/>);
    //             break;
    //         case 'movieList':
    //             return(<MovieListCont id={personID}/>);
    //             break;
    //         case 'win':
    //             return(<TimeLineCont/>);
    //             break;
    //     }
    // }

  return (

      <>
      { endGame ? <TimeLineCont/> : 
        <>
          <MovieEndCont movie_ID={to}/>
          <MovieStartCont movie_ID={from}/>
        </>
      }

      {/* { activeDisplay === 'win' ? <></> : <MovieEndCont/> }
        
      { 
        renderSwitch(activeDisplay)
    }
        <button onClick={()=>changeActive('movie')}>MOVIE</button>
        <button onClick={()=>changeActive('creditsList')}>CREDITS LIST</button>
        <button onClick={()=>changeActive('win')}>timeline</button> */}
    </>
  );
};

export default MainCont;
