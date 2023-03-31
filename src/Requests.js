const key = 'bc82d6bf08fa029ebf385caf1382f11c'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=35`,
    requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=16`,
    requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=28`,
    requestAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=12`,
    requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=18`,
    requestThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&with_genres=53`,
};

export default requests