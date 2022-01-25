import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import NavBar from '../components/NavBar';

export default function Hompage() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const route = () => {
        setName(localStorage.getItem('user'));
        const key = localStorage.getItem('user-authentication-token');
        return key? true:false;
    }
    useEffect(()=>{
        if(!route()){
            navigate('/login');
        }
    },[route,navigate]);
    
    const [url,seturl] = useState('');
    
    const newCall = () => {
        const id = shortid.generate();
        navigate(`/${id}`);
    }
    const joinCall = () => {
        navigate(`${url}#join`);
    }

    return (
        <>
            <NavBar/>
            <div className="hero">
            <h2>Welcome Back {name}</h2>
            <button onClick={newCall}>Start New Call</button>
            <form onSubmit={joinCall}>
                <input type="text" onChange={e =>seturl(e.target.value)}/>
                <button type="submit">join</button>
            </form>
            </div>
        </>
    )
}
