import React, { useEffect, useState } from 'react';
import "./Search.css";
import { useNavigate } from 'react-router-dom';


const cityUrl = "https://foody-app-api.herokuapp.com/location"
const restUrl = "https://foody-app-api.herokuapp.com/restaurants?state_id="
function Search(props) {
 const[citydata, setCitydata]= useState(null)
 const[restaurantData, setRestaurantdata] = useState(null)
 const [restIdentity, setRestidentity]= useState(true)
useEffect(()=>{
    function fetchCity(){
        fetch(cityUrl)
        .then(res=>res.json())
        .then((data)=>{
            if(data){
                let locations= data.map((item)=>{
                    return <option value={item.state_id} key={item._id}>{item.state}</option>
                })
                setCitydata(locations)
             
            }
        })
    }
    fetchCity()
},[])
function fetchRestaurants(event){
    let restId= event.target.value
    fetch(`${restUrl}${restId}`)
    .then(res=>res.json())
    .then((data)=>{
        if(data){
            let restaurants = data.map((item)=>{
                return <option key={item.restaurant_id}>{item.restaurant_id}. {item.restaurant_name} | {item.address}</option>
            })
            setRestaurantdata(restaurants)
        }
    })
}
const navigate = useNavigate()
const handleRest = (event) =>{
   
    let rest_id = event.target.value.split('.')[0]

    navigate(`/details/${rest_id}`)

}
 return(
    <div >
        <div id="search">
            <div id="logo">
                <span>E!</span>
            </div>
            <div id="heading">
                Find The Best Restaurants Near You
            </div>
            <div className="dropdown">
                <select onChange={fetchRestaurants} >
                    <option>-----PLEASE SELECT CITY-----</option>
                    {citydata}
                    
                </select>
                <select onChange={handleRest} className="restlist">
                    <option>-----PLEASE SELECT RESTAURANTS-----</option>
                    {restaurantData}
                </select>
            </div>
        </div>
    </div>
)
    
}

export default Search;