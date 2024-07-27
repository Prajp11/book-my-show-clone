# book-my-show-clone

### Requirements

Pages:

- Home.Page.jsx   (Default.Hoc.jsx) 
- Movie.Page.jsx  (Movie.Hoc.jsx)
- Play.Page.jsx   (Default.Hoc.jsx)
   
HOCS/Layouts:
- Default.Hoc.jsx
- Movie.Hoc.jsx

Components:

- Cast                 - Cast.Component.jsx

- Entertainment        - EntertainmentCard.Component.jsx

- HeroCarousel         - HeroCarousel.Component.jsx
                       - Arrows.Component.jsx
                       
- MovieHero            - MovieHero.Component.jsx
                       - MovieInfo.Component.jsx

- Navbar               - Navbar.Componenet.jsx
                       - MovieNavbar.Component.jsx

- PaymenModal          - Payment.Component.jsx

- PlayFilters          - Filters.Componenet.jsx

- Poster               - Poster.Componenet.jsx

- PosterSlider         - PosterSliderComponenet.jsx

### Starting with the project

Creating a React App with create-react-app

'npx create-react-app project-name' Command:
  - Creates a new directory named project-name.
  - Sets up a new React application inside this directory.
  - Example: npx create-react-app my-app

'npx create-react-app .' Command:
  - Initializes a new React application in the current directory.
  - The current directory must be empty or contain no conflicting files.
  
### Installing Tailwind

- we are using here Tailwind instead Bootstrap and we went through official document of Tailwind and learned about installation process and its commands.
- 'npm install -D tailwindcss' is the terminal command for installing tailwind but improvised here with npm 
'install -D tailwindcss postcss autoprefixer' command cause we want some advanced features for us.

- As per documentation we used second command 'npx tailwindcss init' in our terminal and we got 'tailwind.config.js' in our package.

- We have to add the paths to all of your template files in your tailwind.config.js file. so we copy pasted that module from official document.

- Then Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
"@tailwind base;
 @tailwind components;
 @tailwind utilities;" and we erased default content from it before pasting this.

- after importing everything and clearing unneccessary files we are ready to start app so used 'npm run start' command.

### React Slick

- we need this according to our posters and buttons requirements in our project.
- so we went its official site and got command for installation "npm install react-slick".
- to include css also we used command mentioned there "npm install slick-carousel" and import it in main file 'App.js' using import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

### Axios

- we have to install npm Axios cause Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

### Headless UI
- here we can get much more styles as per our requirements apart from tailwind so installed it also

'npm install @headlessui/react'

### React Icons

- go to its official website and install react icons using commands mentioned there it will be also useful for us in futher project.

Then I imported BrowserRouter in my index.js and wrapped it up also cause we needed it.


### Extentions

we installed few extentions for our easiness
- auto import
- auto rename tag
- auto close tag
- Prettier code formatter
- Es7+ React/redux
- Thunder Client

After this we went to settings and searched for format and we selected for 'Format on Paste and Format on Save' options.

### Working on Project and "rafce" shortcut

- we created folders named pages' and 'layout' in src and again created three files under pages folder for homepage, moviepage and playpage and wrote basic syntrax there and we imported that pages files we created earlier in app.js also.

- After that we created files under layout also called 'Default.layout.jsx' and 'Movie.layout.jsx'. and we used shortcut to write layout syntax under it like we wrote "rafce" and pressed enter we got whole syntax code because we installed extention called 
'Es7+React/Redux'. in that layout files we added function with (Component) and spread operator ({...props}) function. and that functions we shold call under our div tags.

- Like earlier we mentioned in requiremnts about our components so we have to now create components files under the folder which we have create called 'components' in src

- As we installed extention called Prettier we have to set our default foramatter for prettier then only it will autosuggest us code while writing.

- We started working on requirements which we earalier wrote so I creted here few folders under src in src under components folder we creted sub folders like 'Entertainment', 'HeroCarousel', 'Navbar', 'PoterSlider' and in that added files with '.jsx' in the respective folders to fulfill our requirements and under Navbar did basic structure to see what output we are getting to build further logic.

- Now main thing we have to import the filles which we created earlier in our Home.Page.jsx file to do next working.
- added one more extention called 'Tailwind intelligence'.




### Movie Database
- I want databse of latest and old movies for my application so there is  one official website where we can connect our app to this site as our database 'https://www.themoviedb.org/' to fetch the movies info which we want on our application. So register yourself and then go to your profile and click on API and generate key for yourself so select option as developer then fill few required basic details and then it will generate API key of movie database for you.
 
https://api.themoviedb.org/3/movie/550?api_key=5f46472485153405e872c193604a6618 

HomePage Component

The HomePage component fetches top-rated movies from the TMDb API and stores them in the component's state when it mounts.

javascript
const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY");
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  // Render movies here
};


### Code Explanation

- *useState*:
  - Initializes recommendedMovies state as an empty array.
  
- *useEffect*:
  - Runs the provided function once when the component mounts, similar to componentDidMount in class components.
  - Defines and calls requestTopRatedMovies to fetch data from the TMDb API.

- *requestTopRatedMovies*:
  - An asynchronous function that makes a GET request to the TMDb API using axios.get.
  - Updates recommendedMovies state with the fetched data (getTopRatedMovies.data.results).

Replace YOUR_API_KEY with your actual TMDb API key.

### Import Link

- if we want our application to be work like a single page application(SPA) then make sure you are importing link here from react router dom and we are importing it in 'Poster.Component.jsx' cause we have to amke sure that on clicking poster of movie it should not reload whole application but only the required linkinshort we ahve anchor tags in HTML and this Link acts as same in react.

- We know that we are calling our data from TMDB so under image tag we have mention our image src={"https://image.tmdb.org/t/p/original${props.poster_path}"} like this.

In JavaScript, backticks (`` ` ``) are used for template literals, which allow for embedded expressions and multi-line strings. Here's why we used backticks instead of single or double quotes:

### Reasons for Using Backticks

Template Literals:
   - Template literals allow embedding expressions within a string using the ${expression} syntax. This is not possible with single (') or double (") quotes.
   - Example:
     javascript
     const movieId = 123;
     const url = `/movie/${movieId}`; // Using backticks
     

String Interpolation:
   - Backticks enable string interpolation, which means you can insert variables and expressions directly into the string.
   - Example:
     javascript
     const posterPath = '/path/to/poster.jpg';
     const imageUrl = `https://image.tmdb.org/t/p/original${posterPath}`; // Using backticks
     

Multi-line Strings:
   - Template literals can span multiple lines, which can make code more readable when dealing with long strings.
   - Example:
     javascript
     const multiLineString = `This is a string
     that spans multiple
     lines.`;
     

### Example in Your Code

- *Link Component*:
  javascript
  <Link to={`/movie/${props.id}`}>
  
  - props.id is embedded within the URL string using ${props.id}.

- *img Element*:
  javascript
  <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="Poster" className="w-full h-full rounded-md" />
  
  - props.poster_path is embedded within the image URL string using ${props.poster_path}.

Using single or double quotes would not allow embedding these expressions directly into the strings. Instead, you'd have to concatenate strings, which is less readable and more error-prone. For example:

### Without Template Literals
javascript
const url = '/movie/' + props.id; // String concatenation with single quotes
const imageUrl = 'https://image.tmdb.org/t/p/original' + props.poster_path; // String concatenation with single quotes


Using backticks and template literals makes the code cleaner and easier to read.


### Payment Modal
- For creating paymenyt modal or we want to get pop-up message like payment got successful you have to use one official site called 'Headless UI' where they will provide you details for the same features which want with the code.








