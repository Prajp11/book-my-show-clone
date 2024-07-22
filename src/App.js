import './App.css';

//Routers
import {Routes, Route} from "react-router-dom";

//React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import the pages we created
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.Page';
import HomePage from "./pages/Home.Page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
