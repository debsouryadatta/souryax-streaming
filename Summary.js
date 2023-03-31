// To DO: 1) Make Read More in the Main Component. 2) Add more genres in the app. 3) Login with Google account 4) Pop up card on click on the movies

// Doubt - How (onAuthStateChanged) works?
// API Key: bc82d6bf08fa029ebf385caf1382f11c https://api.themoviedb.org/3/genre/movie/list?api_key=bc82d6bf08fa029ebf385caf1382f11c

// * 1. Creating the react app with tailwind css and installing many packages like - axios react-router-dom firebase react-icons tailwind-scrollbar-hide

// * 2. Working on our first component - Navbar

// * 3. Using react-router-dom for routing purposes

// * 4. Creating the Home page - creating the main component & doing axios call from the TMDB Api on it, using truncateString function to truncate the description

// * 5. Creating the row component 
// * 6. Creating the movie componenet to show all the movies that are fetched.

// * 7. Developing horizontal scroll with slideLeft & slideRight functions in the row component.

// * 8. Setting up the firebase and exporting auth from firebase.js

// * 9. Using useContext for authentication - creating different states, functions & passing it to the app( signUp, logIn, logOut, user )

// * 10. Made the signup/signin pages -> where we used the signup/signin functions passed by the usecontext

// * 11. Modifying the Navbar for Account/Logout -> Using logout function for logging out & Using navigate hook for navigating to Home page

// * 12. Creating a ProtectedRoute component so that only those who are signed in can go to '/account' route -> Packing up Account component inside the ProtectedRoute component

// * 13. Creating empty arrays in firestore using signUp func to store the liked movies

// * 14. Saving amd liking movies in Movie.jsx -> Storing the saved movies in the firestore using arrayUnion() which adds elements to an array but only elements not already present.

// * 15. In the Account.js -> Inside the SavedShows component, showing the movies that are saved in the firestore using onSnapshot 

// * 16. Creating a deleteShow function using update function of firestore



// * Self:
// * 17. Done with the floating card -> Used modal of MUI and also copied contents from the main component
// * 18. Done with the adding of more genres

