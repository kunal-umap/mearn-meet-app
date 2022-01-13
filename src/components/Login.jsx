import React,{useState} from 'react'

export default function Login() {
    setTimeout(()=>{
        document.querySelector(".activeLBtn").style.background = "white";
        document.querySelector(".activeSBtn").style.background = "linear-gradient(to right,#754eaf,#c653ba,#e0849c,#efa389)";
    },50)

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
  
    function handleClick(event) {
        event.preventDefault();
        let values ={
            email,
            password,
        }
        console.log(values)
    }

    return (
        <div className='formContainer' >
            <h1>Login</h1>
            <form method="POST" onSubmit={handleClick} >
                <div className="inputBox">
                    <input type="text"id="email" className='inputText' onChange={e => setemail(e.target.value)} placeholder='Email Address'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="password" className='inputText' onChange={e => setpassword(e.target.value)}  placeholder='Password'/>
                </div>
                <div className="inputBox">
                    <button type="submit" className='subBtn' >Login</button>
                </div>
            </form>
        </div>
    )
}
