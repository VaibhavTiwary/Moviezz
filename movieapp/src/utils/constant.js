export const API_END_POINT = "http://localhost:8080/api/v1/user";

// export const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA3NjEyYjhhOTUwYTkwYzAxMzg5OTNlNzZiYzVhNyIsInN1YiI6IjY2NmU2MjY2ZDhhMmUyZDhjMzdkYTNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_AUu9HbJVT2JOE4LAuv8FDJI6JCVkAJ_G5oVgVZedU'
//     }
// };

// export const options = {
//     method: 'GET',
//     hostname: 'imdb8.p.rapidapi.com',
//     port: null,
//     path: '/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US',
//     headers: {
//         'x-rapidapi-key': 'fb9590b533mshe4d3c0c139fb596p19a023jsn4ad4c999b385',
//         'x-rapidapi-host': 'imdb8.p.rapidapi.com'
//     }
// };

// export const Now_Playing_Movie = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
export const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'fb9590b533mshe4d3c0c139fb596p19a023jsn4ad4c999b385',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};



export const Now_Playing_Movie = 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies?homeCountry=US&purchaseCountry=US&currentCountry=US';
// export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";