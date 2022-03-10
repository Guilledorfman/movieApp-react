import React, { useState, useContext, useEffect } from 'react';
import './Credit.scss'

import { MovieListContext } from '../../context/MovieListContext';

const Credit = ({name, id, photo, job}) => {

  const {  movieList, setPersonID, addToTimeLine, setShowMovieList } = useContext(MovieListContext)

  const [ results, setResults ] = useState([])
  

  useEffect(()=>{
    setResults(movieList)
  },[movieList])


function pickCredit(){
  addToTimeLine(photo, name, job, id, '')
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
