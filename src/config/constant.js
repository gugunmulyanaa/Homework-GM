export const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";
export const API_SCOPE = "playlist-modify-private";
export const REDIRECT_URI = "http://localhost:3000/";
export const REDIRECT_URI = "https://generasi-gigih-homework-hk0ib4e9f-thezuckq.vercel.app/";
export const SIGNIN_URL = `https://accounts.spotify.com/en/authorize?client_id=${
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY
}&response_type=${"token"}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

