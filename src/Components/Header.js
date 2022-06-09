import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


function Header(props) {
    const navigate = useNavigate()
 
   const loginHandler = (e)=>{
       let buttonvalue = e.target.value
            if(buttonvalue==="login"){
                navigate('/login')
            }            
   }

    function myorders(){
        navigate('/ViewOrder')
    }
    
    return (
        <div>
             <header>
                <div id="icon">
                    <h1>Zomato</h1>
                </div>
                <Link to="/" className="btn btn-info btnclass">Home</Link>
                <div id="social">
                    {/* <a href="https//www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="Facebook" className="slogo"/>
                    </a>
                    <a href="https//www.instagram.com" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="Instagram" className="slogo"/>
                    </a>
                    <a href="https//www.youtube.com" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="youtube" className="slogo"/>
                    </a> */}
                   <button onClick={loginHandler} value="login" className="signup"><span className="glyphicon glyphicon-log-in"></span> Login</button>
                   <button className="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</button>
                   <button onClick={myorders} className="signup"><span className="glyphicon glyphicon-tasks"></span>My orders</button>
                   <button className="signup"><span className="glyphicon glyphicon-cog"></span>Admin</button>
                   
                </div>
                


                
            </header>
            <Outlet />
            
        </div>
        
    );
}

export default Header;