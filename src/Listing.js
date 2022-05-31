import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cuisinefilter from './Components/Cuisinefilter';
import Restaurant from './Components/Restaurant';
import Costfilter from './Components/Costfilter';
import './Listing.css'

let restaurantlist;
function Listing(props) {
    let params = useParams()
    restaurantlist = `https://foody-app-api.herokuapp.com/restaurants/${params.id}`
    
    let mealId = params.id?params.id:1;
    sessionStorage.setItem("mealId", mealId);
    const[restaurantData, setRestaurantData]= useState([])

    useEffect(()=>{
        
            fetch(restaurantlist)
            .then(res=>res.json())
            .then((data)=>{
                if(data){
    
                    setRestaurantData([...restaurantData, data])
     
                 
                }
            })
        
       
    },[])
    return (
        <div className='mainDiv'>
            <div className='leftdiv'>
                <Cuisinefilter />
                <Costfilter />
            </div>
            <div className='rightdiv'>
              
                <Restaurant restdata={restaurantData} />
          
            </div>
        </div>
    );
}

export default Listing;