import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
const url = "https://foodyapp-login.herokuapp.com/api/auth/register"

const getUsers = "https://foodyapp-login.herokuapp.com/api/auth/users"

let emails = []

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [errormsg, setErrormsg] = useState(true);



    const navigate = useNavigate()


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    useEffect(()=>{
        fetch(getUsers)
        .then(res => res.json())
        .then((data) => {
            data.map((item) => {
                emails.push(item.email)
                return "ok"

            })
        })
    },[])
    function register() {
        const formdata = {
            name: name,
            email: email,
            password: password,
            phone: phone
        }
       
        console.log(emails)
        if (emails.indexOf(email) === -1) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formdata)
            })
                .then(res => {
                    console.log(res.status);
                    console.log(res.json())
                    setErrormsg(true)
                })
                .then(navigate('/login'))


        } else {
            setErrormsg(false)
        }
    }




    return (
        <>
            <Header />
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                    value={name} onChange={handleNameChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                    value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                    value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                    value={phone} onChange={handlePhoneChange} />
                            </div>

                        </div>
                        <button className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                    {!errormsg && <h2 style={{color:"red"}}>Email already registered !!</h2>}
                </div>
            </div>
        </>

    );
}

export default Register;