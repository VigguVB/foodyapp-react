import React, { useEffect } from 'react';
import Header from '../Header';

function Login(props) {
   
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
                        <h3 style={{color:'red'}}></h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"/>
                            </div>
                            
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Login;