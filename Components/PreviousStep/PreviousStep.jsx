import React from 'react'
import './PreviousStep.scss'

const PreviousStep = ({lastStep}) => {

console.log(lastStep);

  return (
    <div className="previous-cont">
    <b>Previous Step</b>
    <div className="previousstep">
      <div className="previousinfo">
        { lastStep.length > 0 ? 
        <>
          <h2>{lastStep[lastStep.length-1].title}</h2>
          {<img className="previousimg" src={lastStep[lastStep.length-1].img}></img>}

          
        
        </>
        : 
          <></> 
        }
      </div>
    </div>
    
    </div>
  )
}

export default PreviousStep