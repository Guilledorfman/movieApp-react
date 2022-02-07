import React from 'react';
import Level from '../Level/Level';
import './LevelsCont.css'

const LevelsCont = ({lvls, setSelected}) => {
    // const IMG_PATH = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    
    
    const lvlsList = lvls.map((e, index)=>{
        

     return(
         <Level movieA ={e.a} movieB={e.b} key={index} setSelected={setSelected}/>
     ) 
    })

  return <div className='lvl-cont'>
      

    {lvlsList}
      
      </div>;
};

export default LevelsCont;
