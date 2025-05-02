# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login form
- Sign up form
- Form validation
- useRef Hook
- Firebase setup
- Deploying our app to production
- Create signup user account
- Implement sign in and sign up user Api
- Created redux store with userSlice
- Implmented sign out
- Update profile api
- Bugfix: Sign up user display name and profile picture update
- Bug fix - If the user is not logged in redirect /browse to login page and vice versa
  -Unsubscribed to the aoAuthStateChanged callback
- Add hardcoded values into constant file
  -Register TMDB API & create an app &get access token
- Get data from TMDB now playing movies list API
- Custome hook for Now playing movies
  -Create movieSlice
- Update store movies data
  -Planning for maina nd secondary container
- fetch data for trailer video
  -Update store with trailerVideoData
  -Embedded the youtue video and make it autoPlay and mute
- Tailwind classes to make main container look good
-Build secondary component
-Build movie list
-Build movie card
TMDB image CDN url
-Made the browse page amazing with Tailwind CSS
-usePopularMovies custom hook

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT

  - Search Bar
  - Movie Suggestions

  # How to find Firebase APIs

  Firebase documentation -> Search authentication -> Select Firebase authentication -> web -> Manage Users -> Here it will API's(We should use API's from web modular API)
