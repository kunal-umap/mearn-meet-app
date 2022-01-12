import React from 'react'

export default function Login() {
    setTimeout(()=>{
        document.querySelector(".activeLBtn").style.background = "white";
        document.querySelector(".activeSBtn").style.background = "linear-gradient(to right,#754eaf,#c653ba,#e0849c,#efa389)";
    },50)
    return (
        <div className='formContainer' >
            <h1>Login</h1>
            <form method="GET">
                <div className="inputBox">
                    <input type="text"id="email" className='inputText' placeholder='Email Address'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="password" className='inputText' placeholder='Password'/>
                </div>
                <div className="inputBox">
                    <button type="submit" className='subBtn'>Login</button>
                </div>
            </form>
        </div>
    )
}
