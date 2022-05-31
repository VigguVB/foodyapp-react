import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home';
import Footer from './Components/Footer'; 
import Listing from './Listing';
import Details from './Components/Details/Details'; 

function Routing(props) {
    return (
       <BrowserRouter>
       <Header />
       <Routes>
<Route path="/" element={<Home />}/>
<Route path="listing" element={<Listing />}/>
<Route path="listing/:id" element={<Listing />}/>
<Route path="details" element={<Details />}/>
<Route path="listing/:id/details/:restid" element={<Details />}/>


</Routes>
<Footer />

</BrowserRouter>
        
    );
}

export default Routing;