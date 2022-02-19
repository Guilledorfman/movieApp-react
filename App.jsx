import MovieEndCont from "./Components/MovieEndCont/MovieEndCont"
import './App.scss'
import MovieStartCont from "./Components/MovieStartCont/MovieStartCont"
import MovieListContextProvider from "./context/MovieListContext"
import MainCont from "./Components/MainCont/MainCont"
import LevelSelect from "./Components/LevelSelect/LevelSelect"
import Topbar from "./Components/Topbar/Topbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeLine from "./Components/TimeLine/TimeLine"
import Footer from "./Components/Footer/Footer"



function App({}) {

  return (
    <div className="App">
      <MovieListContextProvider>
        <BrowserRouter>
          <Topbar/>
          <Routes>
            <Route exact path="/" element={<LevelSelect/>}/>
            <Route exact path="/play/:from/:to" element={<MainCont/>}/>
            <Route exact path="/timeline" element={<TimeLine/>}/> 
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MovieListContextProvider>

    </div>
  )
}

export default App
