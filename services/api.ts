export const TMDB_CONFIG = {
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    BASE_URL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        accept: 'application/json'
    }
}

export const fetchMovies = async ({query} : {query: string}) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })
    if(!response.ok){
        //@ts-ignore
    throw new Error('Something went wrong while fetching movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
     
}

