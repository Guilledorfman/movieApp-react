import MovieEndCont from "./Components/MovieEndCont/MovieEndCont"
import './App.css'
import MovieStartCont from "./Components/MovieStartCont/MovieStartCont"
import MovieListContextProvider from "./context/MovieListContext"
import MainCont from "./Components/MainCont/MainCont"
import LevelSelect from "./Components/LevelSelect/LevelSelect"



function App({}) {

  return (
    <div className="App">
      <MovieListContextProvider>
        {/* <MovieEndCont/> */}
        <LevelSelect/>
      </MovieListContextProvider>

    </div>
  )
}

export default App
