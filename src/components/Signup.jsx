import React from 'react'

export default function Signup() {
    setTimeout(()=>{
        document.querySelector(".activeSBtn").style.background = "white";
        document.querySelector(".activeLBtn").style.background = "linear-gradient(to right,#754eaf,#c653ba,#e0849c,#efa389)";
    },50)
    return (
        <div className='formContainer'>
            <h1>Sign up</h1>
            <form method='POST'>
                <div className="inputBox">
                    <input type="text"id="user" className='inputText' placeholder='User Name'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="email" className='inputText' placeholder='Email Address'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="password" className='inputText' placeholder='Set Password'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="conformpassword" className='inputText' placeholder='Conform Password'/>
                </div>
                <div className="inputBox">
                    <button type="submit" className='subBtn'>Sign up</button>
                </div>
            </form>
        </div>
    )
}
