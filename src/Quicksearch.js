import React, { useEffect, useState } from 'react';
import QuickDisplay from './QuickDisplay';
import './Quicksearch.css';

const quickurl = "https://foody-app-api.herokuapp.com/quicksearch"
function Quicksearch(props) {

    const [mealType, setMealType]= useState("")
    useEffect(()=>{
        fetch(quickurl)
        .then(res=>res.json())
        .then((data)=>{
            if(data){
                setMealType(data)
            }
        })
    },[])
    return (
            <div>
                <div id="QuickSearch">
                    <span id="QuickHeading">
                        Quick Search
                    </span>
                    <span id="QuickSubHeading">
                        Discover Restaurants By Meal
                    </span>
                    <QuickDisplay mealData={mealType}/>
                </div>
            </div>
        
    );
}

export default Quicksearch;