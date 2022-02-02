import React, {useState, useEffect, useContext} from 'react';
import './CreditsCont.css'
import Credit from '../Credit/Credit';
import { MovieListContext } from '../../context/MovieListContext';
import CreditsList from '../CreditsList/CreditsList';

const CreditsCont = ({movie_ID}) => {

    const { showMovieList, movieList, formatedCredits, getFetchCredits, creditsList, getFetch, activeDisplay, setActiveDisplay } = useContext(MovieListContext)

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    const API = `https://api.themoviedb.org/3/movie/${movie_ID}/credits?api_key=${API_KEY}`;

    const [movieID, setMovieID] = useState(movie_ID)
    const [movieCredits, setMovieCredits] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect( async ()=>{


            let data = await fetch(API).then(res=> res.json())
            // console.log(data)
            formatCredits(data)
            // .finally(setMovieCredits(data))
            
    

        // await getFetchCredits(API)
        // .then(formatCredits(creditsList))
        // .finally(setLoading(false))
    },[movieID])

    function formatCredits(data){

        let director;
        let score;
        let actors;
        let creditsArray = [];

        if(data.crew === undefined){

        }else{
            director = data.crew.find((e)=> e.job == 'Director');
            score = data.crew.find((e)=> e.job == 'Original Music Composer')
        }

        data.cast === undefined ? <></> : actors = data.cast.slice(0,8);

        director === undefined ? <></> : creditsArray.push(director)
        score === undefined ? <></> : creditsArray.push(score)
        const newCreditsArray = creditsArray.concat(actors)

        setMovieCredits(newCreditsArray);
        setLoading(false)


    }

    // useEffect(()=>{
    //     setMovieCredits(creditsList)
    // },[creditsList])
    
    // useEffect( async ()=>{

    //     await formatCredits(movieCredits)
    //     .then(console.log('listo'))
    //     .finally(setLoading(false))

    // }, [movieCredits])



    // useEffect(()=>{
        // const credits = formatedCredits.map(e=>{
        //     return(
        //         <p>{e.name}</p>
        //     )
        // let photo;
        // let job;
 
        // e.job === undefined ? job = e.character : job = e.job

        // if(e.profile_path === null){
        //     photo = 'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
        // }else{
        //     photo = `https://image.tmdb.org/t/p/w500/${e.profile_path}`
        // }

        // return(
        //     <Credit key={e.id} name={e.name} id={e.id} photo={photo} job={job}/>
        // )

    // })
    // }, [formatedCredits])
    
    // const creditsArray = [];
    // const director = movieCredits.crew.find((e)=> e.job == 'Director')
    // const score = data.crew.find((e)=> e.job == 'Original Music Composer')
    // const actors = data.cast.slice(0,8);

    // director === undefined ? <></> : creditsArray.push(director)
    // score === undefined ? <></> : creditsArray.push(score)
    // const newCreditsArray = creditsArray.concat(actors)

    // const credits = newCreditsArray.map(e=>{
    //     let photo;
    //     let job;
 
    //     e.job === undefined ? job = e.character : job = e.job

    //     if(e.profile_path === null){
    //         photo = 'https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png'
    //     }else{
    //         photo = `https://image.tmdb.org/t/p/w500/${e.profile_path}`
    //     }

    //     return(
    //         <Credit key={e.id} name={e.name} id={e.id} photo={photo} job={job}/>
    //     )

    // })


  return (

      <div className="creditsCont">
          {/* {credits} */}
          {/* {console.log(loading)} */}
          {loading === true ? <>LOADING</> : 
        //   <>not loading</>
          <CreditsList data={movieCredits}/> 
          }
          
      </div>
  )
  
};

export default CreditsCont;
