import React, {useState} from 'react';
import './TimeLine.scss'


const TimeLine = ({img, title, subtitle, index, original_title, language}) => {


  const [ stepClass, setStepClass ] = useState('timeline-step-cont')
  const [ lineClass, setLineClass ] = useState('line')

  setTimeout(()=>{
    setStepClass('timeline-step-cont visible')
  },[index * 600])

  setTimeout(()=>{
    
    setLineClass('line visible')
  },[index * 500])
  
  return (
    <div className={stepClass}>
      <div className="timeline-step">
          <img src={img}></img>
          {index === 0 ? <></> :
          
          <h4 className='index'>{index}</h4>
          }
          <div className="info">
            { language === 'en' || original_title === "" ? <h2>{title}</h2> : 
              <>
                <h2>{original_title}</h2>
                <i>{title}</i>
              </>
            }

            <h3>{subtitle}</h3>
          </div>
      </div>
      <div className={lineClass}></div>
    </div>
  )
  
};

export default TimeLine;
