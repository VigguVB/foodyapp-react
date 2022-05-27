import React from 'react';
import './Restaurant.css'
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
                            <h1 className='restname'>{item.restaurant_name}</h1>
                            <h3 className='address'>{item.address}</h3>
                            <h4 className='otherdetails'>Average Rating : {item.average_rating}</h4>
                            <h4 className='otherdetails'>Rating Text : {item.rating_text}</h4>
                            <h4 className='otherdetails'>Cost : ₹{item.cost}</h4>
                            <h4 className='otherdetails'>Contact Number : {item.contact_number}</h4>
                          
                            <button className='restbtn'>DIRECTION →→</button>
                            <button className='restbtn'>REVIEWS</button>
                        </div>
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