import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css";


function Header(props) {
    return (
        <div>
             <header>
                <div id="icon">
                    <h1>Zomato</h1>
                </div>
                <Link to="/" className="btn btn-info btnclass">Home</Link>
                <div id="social">
                    <a href="https//www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/dtzG625/facebook.png" alt="Facebook" className="slogo"/>
                    </a>
                    <a href="https//www.instagram.com" target="_blank">
                        <img src="https://i.ibb.co/19H5LvT/insta.png" alt="Instagram" className="slogo"/>
                    </a>
                    <a href="https//www.youtube.com" target="_blank">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="youtube" className="slogo"/>
                    </a>
                </div>
            </header>
            <Outlet />
            
        </div>
        
    );
}

export default Header;