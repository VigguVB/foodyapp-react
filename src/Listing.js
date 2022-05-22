import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Restaurant from './Components/Restaurant';
import './Listing.css'

let restaurantlist;
function Listing(props) {
    let params = useParams()
    console.log(params.id)
    restaurantlist = `https://foody-app-api.herokuapp.com/restaurants/${params.id}`
 

    const[restaurantData, setRestaurantData]= useState([])

    useEffect(()=>{
        
            fetch(restaurantlist)
            .then(res=>res.json())
            .then((data)=>{
                if(data){
                    console.log(data)
                    setRestaurantData([...restaurantData, data])
                 
                }
            })
        
       
    },[])
    return (
        <div className='mainDiv'>
            <div className='leftdiv'>

            </div>
            <div className='rightdiv'>
                
                <Restaurant restdata={restaurantData} />
            </div>
        </div>
    );
}

export default Listing;