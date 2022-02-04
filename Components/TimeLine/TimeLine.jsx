import React from 'react';

const TimeLine = ({img, title, subtitle}) => {
  return (
    <div>
        <img src={img}></img>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
  )
  
};

export default TimeLine;
