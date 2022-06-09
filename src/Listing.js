import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cuisinefilter from './Components/Cuisinefilter';
import Restaurant from './Components/Restaurant';
import Costfilter from './Components/Costfilter';
import './Listing.css'
import Header from './Components/Header';

let restaurantlist;
function Listing(props) {
    let params = useParams()
    restaurantlist = `https://foody-app-api.herokuapp.com/restaurants/${params.id}`
    
    let mealId = params.id?params.id:1;
    sessionStorage.setItem("mealId", mealId);
    const[restaurantData, setRestaurantData]= useState('')
    const[isLoading, setIsLoading] = useState(true);
    const[filterdatapresent, setFilterDataPresent] = useState(false)

    useEffect(()=>{
        
            fetch(restaurantlist)
            .then(res=>res.json())
            .then((data)=>{
                if(data){
                    setIsLoading(false)
                    setRestaurantData(data)
                    if(data.length===0){
                        setFilterDataPresent(true)
                    }else{
                        setFilterDataPresent(false) 
                    }
                 
                }
            })
        
       
    },[])
    function cuisineDataHandler(data){
        setRestaurantData(data)
        if(data.length===0){
            setFilterDataPresent(true)
        }else{
            setFilterDataPresent(false) 
        }
    }

    function costDataHandler(data){
        setRestaurantData(data)
        if(data.length===0){
            setFilterDataPresent(true)
        }else{
            setFilterDataPresent(false)
        }
    }
    return (
        <>
        <Header />
        <div className='mainDiv'>
            <div className='leftdiv'>
                <Cuisinefilter cuisinedata={(data)=>{cuisineDataHandler(data)}} />
                <Costfilter costFilteredData={(data)=>{costDataHandler(data)}} />
            </div>
            <div className='rightdiv'>
                {filterdatapresent && <h1 style={{marginLeft: "5%", marginTop: "1%", color:"brown"}}>There are no items on selected filter</h1>}
                {!isLoading && <Restaurant restdata={restaurantData} />}
                {isLoading && <h1 style={{marginLeft: "5%", marginTop: "1%", color:"brown"}}>Loading<img src="https://i.ibb.co/Jq7HY8S/giphy.gif" width="300px" height="200px"/></h1>}
            </div>
        </div>
        </>
    );
}

export default Listing;