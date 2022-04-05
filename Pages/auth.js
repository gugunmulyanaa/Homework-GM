import queryString from 'query-string';
import { useState, useEffect } from 'react';
import { useEffect } from 'react';
import Login from '../login/login.js';
import Search from '../search/search.js';
import { useSelector, useDispatch } from 'react-redux';
import { dataAccessToken } from '../../data/dataAction.js';

const Auth = () => {
    const [accessToken, setAccessToken] = useState("");
    const accessToken = useSelector(state => state.dataAccessToken.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        setAccessToken(parsed.access_token);
    }, [])
        dispatch(dataAccessToken(parsed.access_token));
    }, [accessToken, dispatch])

    if(accessToken !== undefined){
        return (
            <Search accessToken={accessToken}/>
            <Search/>
        )
    }