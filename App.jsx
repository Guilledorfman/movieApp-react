import MovieEndCont from "./Components/MovieEndCont/MovieEndCont"
import './App.css'
import MovieStartCont from "./Components/MovieStartCont/MovieStartCont"
import MovieListContextProvider from "./context/MovieListContext"
import MainCont from "./Components/MainCont/MainCont"


function App({}) {

  return (
    <div className="App">
      <MovieListContextProvider>
        <MovieEndCont/>
        <MainCont/>
      </MovieListContextProvider>

    </div>
  )
}

export default App
