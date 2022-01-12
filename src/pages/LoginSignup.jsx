import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function LoginSignup(props) {
    return (
        <div className='container'>
           <div className="mainContainer">
                <Outlet/>
                <div className="buttonsContainer">
                    <Link className={`linkBtn activeLBtn`} to="/login">Login</Link>
                    <Link className='linkBtn activeSBtn' to="/signup">Sign up</Link>
                    <div className="circle circle1"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle3"></div>
                    <div className="circle circle4"></div>
                    <div className="circle circle5"></div>
                </div>
           </div>
        </div>
    )
}
