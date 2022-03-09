import React, { useState, useEffect } from 'react';
import './CreditsCont.scss'
import CreditsList from '../CreditsList/CreditsList';

const CreditsCont = ({movie_ID}) => {


    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movie_ID}/credits?api_key=${API_KEY}`;

    const [movieID, setMovieID] = useState(movie_ID)
    const [movieCredits, setMovieCredits] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect( async ()=>{

        let data = await fetch(API).then(res=> res.json())
        formatCredits(data)

    },[movieID])

    function formatCredits(data){
        console.log(data);
        let director;
        let screenplay;
        let writer;
        let score;
        let actors;
        let creditsArray = [];

        if(data.crew === undefined){

        }else{
            director = data.crew.find((e)=> e.job == 'Director');
            screenplay = data.crew.find((e)=> e.job == 'Screenplay');
            writer = data.crew.find((e)=> e.job == 'Writer');
            score = data.crew.find((e)=> e.job == 'Original Music Composer')
        }

        data.cast === undefined ? <></> : actors = data.cast.slice(0,10);

        director === undefined ? <></> : creditsArray.push(director)
        screenplay === undefined ? <></> : creditsArray.push(screenplay)
        writer === undefined ? <></> : creditsArray.push(writer)
        score === undefined ? <></> : creditsArray.push(score)
        const newCreditsArray = creditsArray.concat(actors)

        setMovieCredits(newCreditsArray);
        setLoading(false)


    }


  return (

      <div className="creditsCont">
          {
          loading === true ? 
          <>LOADING</> : 
          <CreditsList data={movieCredits}/> 
          }
      </div>
  )
  
};

export default CreditsCont;
