import React, { createContext, useState } from 'react'

export const MovieListContext = createContext([]);

function MovieListContextProvider( { children } ) {

    const [movieList, setMovieList] = useState([])
    const [ movieID, setMovieID ] = useState(1)
    const [ endMovieID, setEndMovieID ] = useState(2)
    const [ formatedCredits, setFormatedCredits ] = useState([]);
    const [ timeLine, setTimeLine ] = useState([])
    const [ showMovieList, setShowMovieList ] = useState(false)
    const [ goalMovie, setGoalMovie ] = useState({})
    const [ endGame, setEndGame ] = useState(false)
    
    const [ personID, setPersonID ] = useState(0)


    function compareIDs(id){
        id === goalMovie.id ?  showTimeLine() : <></>
    }

    function showTimeLine(){
        addToTimeLine(goalMovie.img, goalMovie.title, goalMovie.subtitle, goalMovie.id, goalMovie.original_title, goalMovie.language)
        setEndGame(true)
        console.log(goalMovie)
    }

    async function getFetch(URL) { 
            let data = await fetch(URL).then(res=> res.json());
            setMovieList(data);
    }


    class Step {
        constructor(img, title, subtitle, id, original_title, language){
            this.img = img;
            this.title = title;
            this.subtitle = subtitle;
            this.id = id;
            this.original_title = original_title;
            this.language = language;
        }
    }

    function addToTimeLine(img, title, subtitle, id, original_title, language){
        let movieYear;
        !isNaN(parseInt(subtitle)) ? movieYear = subtitle.slice(0,4) : movieYear = subtitle;
        let newStep = new Step(img, title, movieYear, id, original_title, language);
        setTimeLine([...timeLine, newStep])
    }


    return(
        <MovieListContext.Provider value={{
            movieList,
            showMovieList,
            setShowMovieList,
            getFetch,
            // activeDisplay,
            // setActiveDisplay,
            movieID,
            setMovieID,
            personID,
            setPersonID,
            // formatCredits,
            // creditsList,
            // getFetchCredits,
            // formatedCredits,
            // endMovieID,
            setEndMovieID,
            compareIDs,
            addToTimeLine,
            setTimeLine,
            timeLine,
            // goalMovie,
            setGoalMovie,
            endGame, 
            setEndGame,
            
            }}>
            { children }
        </MovieListContext.Provider>
    )

}

export default MovieListContextProvider
