import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Footer from './Components/Footer'; 
import Listing from './Listing';
import Details from './Components/Details/Details'; 
import PlaceOrder from './Components/Booking/PlaceOrder';
import ViewOrder from './Components/Booking/ViewOrder';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Alert from './Components/ExtraComponent/Alert';

function Routing(props) {
    return (
       <BrowserRouter>
     
       <Routes>
<Route path="/" element={<Home />}/>
<Route path="/listing" exact element={<Listing />}/>
<Route path="/listing/:id" element={<Listing />}/>
<Route path="/details" exact element={<Details />}/>
<Route path="/details/:restid" element={<Details />}/>
<Route path="/placeOrder/:restName" element={<PlaceOrder />}/>
<Route path='/ViewOrder' element={<ViewOrder />} />
<Route path='/login' element={<Login />} />
<Route path='/register' element={<Register />} />
<Route path='/alert' element={<Alert />} />





</Routes>
<Footer />

</BrowserRouter>
        
    );
}

export default Routing;