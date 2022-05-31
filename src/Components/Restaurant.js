import React from 'react';
import './Restaurant.css'
import { Link } from 'react-router-dom';
function Restaurant(props) {

    const restaurants = ({ restdata }) => {

        if (restdata[0]) {
       
            return restdata[0].map((item) => {

                return (
                    
                    <div key={item._id} className="restdiv">
                        <div className='imagediv'>
                            <img src={item.restaurant_thumb} width="100%" height="355px" />
                        </div>
                        <div className='right_div'>
                        <Link to={`details/${item.restaurant_id}`}>
                            <h1 className='restname'>{item.restaurant_name}</h1>
                            </Link>
                            <h3 className='address'>{item.address}</h3>
                            <h4 className='otherdetails'>{item.average_rating} Ratings</h4>
                            <h4 className='otherdetails'>{item.rating_text}</h4>
                            <h4 className='otherdetails'>Cost : ₹{item.cost}</h4>
                            <h4 className='otherdetails'>Contact Number : {item.contact_number}</h4>
                          
                            <button className='restbtn'>{item.mealTypes[0].mealtype_name}</button>
                            <button className='restbtn'>{item.mealTypes[1].mealtype_name}</button>
                            <button className='restbtn'>{item.cuisines[0].cuisine_name}</button>
                            <button className='restbtn'>{item.cuisines[1].cuisine_name}</button>                        </div>
                    </div>
               

                )
            })
        }

    }
    return (
        <div>
            {restaurants(props)}
        </div>
    );
}

export default Restaurant;