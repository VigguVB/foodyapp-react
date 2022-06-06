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
    const[isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        
            fetch(restaurantlist)
            .then(res=>res.json())
            .then((data)=>{
                if(data){
                    setIsLoading(false)
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
              
                {!isLoading && <Restaurant restdata={restaurantData} />}
                {isLoading && <h1 style={{marginLeft: "5%", marginTop: "1%", color:"orangered"}}>Loading<img src="https://i.ibb.co/Jq7HY8S/giphy.gif" width="300px" height="200px"/></h1>}
            </div>
        </div>
    );
}

export default Listing;