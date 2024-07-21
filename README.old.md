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

















