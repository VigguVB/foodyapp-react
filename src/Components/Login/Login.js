import React, { useEffect,useState } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
const url = "https://foodyapp-login.herokuapp.com/api/auth/login"

function Login(props) {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const emailHandler = (e)=>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    function login(){
        let logindata = {
            email: email,
            password: password
        }
       
        fetch(url,{
            method: "POST",
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(logindata)
            
        }).then(res=>res.json())
        .then((data)=>{
            let restID = sessionStorage.getItem('restId')
            if(data.auth===false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                if(!sessionStorage.getItem("orderChoosed")){
                    console.log("if navigate")
                    navigate('/')
                }else{
                    navigate(`/placeOrder/${restID}`)
                }
               
            }
        })
    }
   
    return (
        <>
            <Header/>
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input onChange={emailHandler} value={email} id="email" name="email" className="form-control"/>
                            </div>
                             <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input onChange={passwordHandler} value={password} id="password" name="password" className="form-control"/>
                            </div>
                            
                        </div>
                        <button onClick={login} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Login;