import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <h4>credits:</h4>
        <p>
            GUILLERMO DORFMAN - 2022
        </p>
        <span>
            <a href="https://www.themoviedb.org/" target="_blank">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TMDB" />
            </a>
        <p>I used the TMDB API for educational purposes only</p>
        </span>
    </div>
  )
}

export default Footer