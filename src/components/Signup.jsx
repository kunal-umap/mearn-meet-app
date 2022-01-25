import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../container/action';



export default function Signup() {
    setTimeout(()=>{
        document.querySelector(".activeSBtn").style.background = "white";
        document.querySelector(".activeLBtn").style.background = "linear-gradient(to right,#754eaf,#c653ba,#e0849c,#efa389)";
    },50)
    
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [conformPassword,setconformPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    function handleClick(event) {
        event.preventDefault();
        let values ={
            email,
            username,
            password,
            conformPassword
        }

        const validate = dispatch(signupAction(values));

        validate
            .then(data => {
                navigate('/login')
            })
            .catch(error => {
                alert(error.data.err)
            })

        // console.log(values)
    }
  
    return (
        <div className='formContainer'>
            <h1>Sign up</h1>
            <form method='POST' onSubmit={handleClick}>
                <div className="inputBox">
                    <input type="text"id="user" className='inputText'onChange={e => setusername(e.target.value)} placeholder='User Name'/>
                </div>
                <div className="inputBox">
                    <input type="text"id="email" className='inputText' onChange={e => setemail(e.target.value)} placeholder='Email Address'/>
                </div>
                <div className="inputBox">
                    <input type='password' id="password" className='inputText' onChange={e => setpassword(e.target.value)} placeholder='Set Password'/>
                </div>
                <div className="inputBox">
                    <input type='password' id="conformpassword" className='inputText' onChange={e => setconformPassword(e.target.value)} placeholder='Conform Password'/>
                </div>
                <div className="inputBox">
                    <button type="submit" className='subBtn'>Sign up</button>
                </div>
            </form>
        </div>
    )
}
