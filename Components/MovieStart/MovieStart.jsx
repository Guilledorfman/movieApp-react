import React, {useState, useEffect, useContext} from 'react';
import CreditsCont from '../CreditsCont/CreditsCont';
import { MovieListContext } from '../../context/MovieListContext';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

import './MovieStart.scss'

const MovieStart = ({data, id}) => {

  const { addToTimeLine } = useContext(MovieListContext)

  let IMG_PATH;
  data.poster_path === null ? IMG_PATH = 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1646695857/movie2movie/movieposternotfound_ry1cc0.png' : IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
  const API = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;


  const [ showCredits, setShowCredits ] = useState(false)


  const getCredits = async function(){


    addToTimeLine(IMG_PATH, data.title, data.release_date, id, data.original_title, data.original_language)
      
    await fetch(API).then(res=> res.json());
    setShowCredits(true)

  }

  return (
    <div className="movie-start">
      { showCredits ? <><CreditsCont movie_ID={id}/></> 
      
      :
      <div className="moviestart-cont">
      
          <img className="movie-start-img" src={IMG_PATH} alt={data.title}/>
          <span className="seecredits" onClick={()=>getCredits()}><SavedSearchIcon className="icon"/></span>
          <div className="movie-start-info">
          {data.original_language === 'en' ?  <h3>{data.title}</h3> : 
            <>
              <h3>{data.original_title}</h3>
              <i>({data.title})</i>
            </>
            
            }
            {data.release_date === undefined ? <></> : <h3>{data.release_date.slice(0,4)}</h3> }

          </div>
      
      </div>
      
      }
    </div>

  )
};

export default MovieStart;
