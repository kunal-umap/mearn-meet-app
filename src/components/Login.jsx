import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../container/action';


export default function Login() {
    setTimeout(()=>{
        document.querySelector(".activeLBtn").style.background = "white";
        document.querySelector(".activeSBtn").style.background = "linear-gradient(to right,#754eaf,#c653ba,#e0849c,#efa389)";
    },50);

    const dispatch = useDispatch();


    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();
    function handleClick(event) {
        event.preventDefault();
        let values ={
            email,
            password,
        }
        const validate = dispatch(loginAction(values));

        validate
        .then(data => {
            navigate('/');
        })
        .catch(error => {
            alert(error.err);
        })
    }

    return (
        <div className='formContainer' >
            <h1>Login</h1>
            <form method="POST" onSubmit={handleClick} >
                <div className="inputBox">
                    <input type="text"id="email" className='inputText' onChange={e => setemail(e.target.value)} placeholder='Email Address'/>
                </div>
                <div className="inputBox">
                    <input type='password' id="password" className='inputText' onChange={e => setpassword(e.target.value)}  placeholder='Password'/>
                </div>
                <div className="inputBox">
                    <button type="submit" className='subBtn' >Login</button>
                </div>
            </form>
        </div>
    )
}
