import React from 'react';
import Level from '../Level/Level';
import './LevelsCont.scss'

const LevelsCont = ({lvls, setSelected}) => {

    const API_KEY = 'c4e35b2781a1c484b54009a2c4e940bf'
    
    
    const lvlsList = lvls.map((e, index)=>{
        

     return(
         <Level movieA ={e.a} movieB={e.b} key={index} setSelected={setSelected}/>
     ) 
    })

  return (
    <div className="lvl-container">
      <h2 className="challenges-title">Or pick one of these challenges:</h2>
      <div className='lvl-cont'>
          {lvlsList}
      </div>
    </div>


  )
  
  
};

export default LevelsCont;
