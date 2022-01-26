import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../container/action';
import Logout from './Logout';



export default function NavBar() {
    const disptch = useDispatch();
    const logout = ()=>{
        disptch(logoutAction());
    }
    return (
        <nav>
            <h1>KMeet</h1>
            <Logout logout={logout}/>
        </nav>

    )
}
