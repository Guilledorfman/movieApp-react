import React, { useState, useContext, useEffect } from 'react';
import './Credit.css'

import { MovieListContext } from '../../context/MovieListContext';

const Credit = ({name, id, photo, job}) => {

  const {  movieList, setPersonID, addToTimeLine, setShowMovieList } = useContext(MovieListContext)

  const [ results, setResults ] = useState([])
  

  useEffect(()=>{
    setResults(movieList)
  },[movieList])

  const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

  // const API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${id}&sort_by=popularity.desc`

  // const pickCredit = async () =>{
    // setPersonID(id)
    // getFetch(API)
    // setResults(data)
    // getFetch(API)
    // setShowMovieList(true)
    // addToTimeLine(photo, name, job, id)
    // setPersonID(people_id)
    // setActiveDisplay('movieList')
// }

function pickCredit(){
  addToTimeLine(photo, name, job, id)
  setPersonID(id)
  setShowMovieList(true)
}
  return(
      <div className='credit' onClick={() => pickCredit()}>
        <img src={photo} alt="" />
        <b>{name}</b>
        <i>{job}</i>
      </div>
  )
};

export default Credit;
