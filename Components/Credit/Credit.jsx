import React, { useState } from 'react';
import './Credit.css'

const Credit = ({name, id, photo, job}) => {

  const { results, setResults } = useState([])


  const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'

  const pickCredit = async (people_id) =>{
    const response = await fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_people=${people_id}&sort_by=popularity.desc`)
    const data = await response.json()
    console.log(data);
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
