import React from 'react';

    
const Auth = () => {
    const client_id = 'f7ad929ce8994cd68a5853a184e1bcce';
    const scope = 'playlist-modify-private';
    const redirect_url = 'https://localhost:3000';

    const handleLogin = () => {
        window.location = `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_url}&scope=${this.scope}%2Fcallback`
    }
    return (
        <a href="/login" onClick={handleLogin()}>Login</a>
    )
}


export default Auth
