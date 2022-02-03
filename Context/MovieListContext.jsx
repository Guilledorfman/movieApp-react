import React, { createContext, useState, useEffect } from 'react'

export const MovieListContext = createContext([]);

function MovieListContextProvider( { children } ) {

    const [movieList, setMovieList] = useState([])
    const [creditsList, setCreditsList] = useState({})
    const [ movieID, setMovieID ] = useState(2)
    const [ endMovieID, setEndMovieID ] = useState(2)
    const [ activeDisplay, setActiveDisplay ] = useState('movie')
    const [ formatedCredits, setFormatedCredits ] = useState([]);
    
    const [ personID, setPersonID ] = useState(0)

    function showMovieList() {
        // console.log(movieList);
        
    }

    // useEffect(()=>{
    //     console.log(movieID);
    // }, [movieID])

    function compareIDs(id){
        id === endMovieID ? console.log('GANASTE') : console.log('segui jugando')
        // console.log('compareIDS');
    }

    async function getFetch(URL) { 
        // console.log(`hacer fetch en la url: ${URL}`);

            let data = await fetch(URL).then(res=> res.json());
            setMovieList(data);
    }

    // async function getFetchCredits(URL) { 
    //     // console.log(`hacer fetch en la url: ${URL}`);

    //         let data = await fetch(URL).then(res=> res.json())
    //         // .finally(formatCredits(data)) 
    // }




    function formatCredits(movieCredits){
        let director;
        let score;
        let actors;
        let creditsArray = [];

        if(movieCredits.crew === undefined){

        }else{
            director = movieCredits.crew.find((e)=> e.job == 'Director');
            score = movieCredits.crew.find((e)=> e.job == 'Original Music Composer')
        }

        movieCredits.cast === undefined ? <></> : actors = movieCredits.cast.slice(0,8);

        director === undefined ? <></> : creditsArray.push(director)
        score === undefined ? <></> : creditsArray.push(score)
        const newCreditsArray = creditsArray.concat(actors)

        setFormatedCredits(newCreditsArray);

    }


    return(
        <MovieListContext.Provider value={{
            movieList,
            showMovieList,
            getFetch,
            activeDisplay,
            setActiveDisplay,
            movieID,
            setMovieID,
            personID,
            setPersonID,
            formatCredits,
            creditsList,
            // getFetchCredits,
            formatedCredits,
            endMovieID,
            setEndMovieID,
            compareIDs,
            
            }}>
            { children }
        </MovieListContext.Provider>
    )

}

export default MovieListContextProvider
