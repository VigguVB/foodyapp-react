import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const url = "https://foodyapp-login.herokuapp.com/api/auth/userInfo"


function Header(props) {
    const navigate = useNavigate()
    const[userData, setUserData] = useState('')
 
   const loginHandler = (e)=>{
       let buttonvalue = e.target.value
            if(buttonvalue==="login"){
                navigate('/login')
            }            
   }

   function handleLogout(){
       sessionStorage.removeItem('ltk');
       sessionStorage.removeItem('menu');
       sessionStorage.removeItem('userInfo');
       sessionStorage.setItem('loginStatus', false);
       sessionStorage.removeItem('mealId');
       sessionStorage.removeItem('restId');
       sessionStorage.removeItem('orderChoosed');
       setUserData("")
       navigate("/")
   }

   const registerHandler = ()=>{
       navigate('/register')
   }

    function myorders(){
        navigate('/ViewOrder')
    }

    function conditionalHeader(){
        if(userData.name){
            let data = userData;
            let outArray = [data.name, data.email, data.phone, data.role ];
            sessionStorage.setItem('userInfo', outArray);
            sessionStorage.setItem("loginStatus", true);

          return(
            <>
            <button className="signup">Hi {userData.name}</button>
            <button onClick={handleLogout} className="signup"><span className="glyphicon glyphicon-log-out"></span>Logout</button>
            </>
          )}else{
              return(
                <>
                <button onClick={loginHandler} value="login" className="signup"><span className="glyphicon glyphicon-log-in"></span> Login</button>
                <button onClick={registerHandler} className="signup"><span className="glyphicon glyphicon-user"></span> Sign Up</button>
                </>
              )
            
        }
    }

    useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
           setUserData(data)    
        })
        
    },[])
    
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
                  {conditionalHeader()}
                   <button onClick={myorders} className="signup"><span className="glyphicon glyphicon-tasks"></span>My orders</button>
                   <button className="signup"><span className="glyphicon glyphicon-cog"></span>Admin</button>
                   
                </div>
                


                
            </header>
            <Outlet />
            
        </div>
        
    );
}

export default Header;