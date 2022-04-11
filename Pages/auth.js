import queryString from 'query-string';
import Login from '../login/login.js';
// import CreatePlaylist from '../createplaylist/createplaylist.js';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
@@ -25,18 +24,6 @@ const Auth = () => {
    return (
        <Login/>
    )

    // if(accessToken !== undefined){
    //     return (
    //         <CreatePlaylist/>
    //     )
    // }

    // else {
    //     return (
    //         <Login/>
    //     )
    // }
}

export default Auth;