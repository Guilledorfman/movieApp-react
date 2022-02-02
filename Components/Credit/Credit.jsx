import React, { useState, useContext } from 'react';
import './Credit.css'

import { MovieListContext } from '../../context/MovieListContext';

const Credit = ({name, id, photo, job}) => {

  const { showMovieList, getFetch, activeDisplay, setActiveDisplay, setPersonID, personID } = useContext(MovieListContext)

  const { results, setResults } = useState([])


  const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
  const pickCredit = async (people_id) =>{
    setPersonID(people_id)
    setActiveDisplay('movieList')
}
  return(
      <div className='credit' onClick={() => pickCredit(id)}>
        <img src={photo} alt="" />
        <b>{name}</b>
        <i>{job}</i>
      </div>
  )
};

export default Credit;
