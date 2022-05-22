import React from 'react';
import './Restaurant.css'
function Restaurant(props) {

    const restaurants = ({ restdata }) => {
        console.log(restdata)
        if (restdata) {
            return restdata.map((item) => {
                return (

                    <div className="restdiv">
                        <div className='imagediv'>
                            <img src={item.image_gallery[3]} width="100%" height="335px" />
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