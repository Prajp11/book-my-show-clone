import './App.css';
import axios from 'axios';
//import .env from ".dotenv";


//Routers
import {Routes, Route} from "react-router-dom";

//React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import the pages we created
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.Page';
import HomePage from "./pages/Home.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

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





//Multiple approaches for API, here we have only three API so we can write it sepeartely still there are multiple approaches.
//Here we are calling only three api so here we can write every API seperately but there is another method also.
//import your axiox here in 'APP.js' and write your code like shown in below.
// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params ={};
// axios.defaults.params["api_key"] = "api_key=5f46472485153405e872c193604a6618"
//And make sure that you are calling your common content of API here in main file so there in 'Home.Page.jsx' change it accordingly.
//But as we know API key is sceret key so if you want to store it in .env file then you can use this third approach.
//To keep your api key seperately then you can create '.env' file under you main and first file so it should be out of src. 
//Write "REACT_APP_API_KEY='your-api-key'" and store it there wthout any spaces between them even in your variable anme also otherwise it will throw error.
//Install 'npm i dotenv' and check once in your package.json file also that it got installed or not.
//But while calling it do changes like this 'axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;'
//If you are using .env file then make sure that you always need to restart our application.