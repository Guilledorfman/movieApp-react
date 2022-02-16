import MovieEndCont from "./Components/MovieEndCont/MovieEndCont"
import './App.scss'
import MovieStartCont from "./Components/MovieStartCont/MovieStartCont"
import MovieListContextProvider from "./context/MovieListContext"
import MainCont from "./Components/MainCont/MainCont"
import LevelSelect from "./Components/LevelSelect/LevelSelect"
import Topbar from "./Components/Topbar/Topbar"



function App({}) {

  return (
    <div className="App">
      <MovieListContextProvider>
        {/* <Topbar/> */}
        {/* <MovieEndCont/> */}
        <LevelSelect/>
      </MovieListContextProvider>

    </div>
  )
}

export default App
