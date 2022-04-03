// import React from 'react';
import React from 'react';


const client_id = 'f7ad929ce8994cd68a5853a184e1bcce';

const Auth = () => {
    const client_id = 'f7ad929ce8994cd68a5853a184e1bcce';
    const scope = 'playlist-modify-private';
    const redirect_url = 'http://localhost:3000/'
    const redirect_url = 'https://localhost:3000';

    const Link = () => {
        `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_url}%2Fcallback&scope=${scope}`
    const handleLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_url}&scope=${this.scope}%2Fcallback`
    }



const Auth = () => {
    return (
        <a href="/login" onClick={Link()}>Login</a>
        <a href="/login" onClick={handleLogin()}>Login</a>
    )
}

export default Auth