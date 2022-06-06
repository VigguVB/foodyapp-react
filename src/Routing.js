import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home';
import Footer from './Components/Footer'; 
import Listing from './Listing';
import Details from './Components/Details/Details'; 
import PlaceOrder from './Components/Booking/PlaceOrder';

function Routing(props) {
    return (
       <BrowserRouter>
       <Header />
       <Routes>
<Route path="/" element={<Home />}/>
<Route path="/listing" exact element={<Listing />}/>
<Route path="/listing/:id" element={<Listing />}/>
<Route path="/details" exact element={<Details />}/>
<Route path="/details/:restid" element={<Details />}/>
<Route path="/placeOrder/:restName" element={<PlaceOrder />}/>



</Routes>
<Footer />

</BrowserRouter>
        
    );
}

export default Routing;