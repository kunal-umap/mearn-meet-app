import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    
    
    const newCall = () => {
        navigate(`/call`);
    }

    return (
        <div className='homepage'>
            <NavBar/>
            <div className="hero">
                <h2>Welcome Back <span>{name}</span></h2>
                <p>Click on start new call to make a video call</p>
                <p>Free Video Call to anyone</p>
                <button onClick={newCall}>Start New Call</button>
            </div>
        </div>
    )
}
