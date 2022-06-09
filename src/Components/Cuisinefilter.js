import React, { useState } from 'react';
import './Cuisinefilter.css'

let url = `https://foody-app-api.herokuapp.com/filters`
function Cuisinefilter(props) {


  const filterCuisine = (e) =>{
    console.log(e.target.value)
    let cuisineId = e.target.value
    let mealId = sessionStorage.getItem('mealId')
  

    if(cuisineId===""){
      fetch(`${url}/${mealId}`)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
        props.cuisinedata(data)
      })
    }else{
      fetch(`${url}/${mealId}?cuisineId=${cuisineId}`)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
        props.cuisinedata(data)

      })
    }
    

  }
    return (
        <div className="container">
  <h2>Cuisine Filter</h2>
  
  <form>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="" /><strong>All</strong></label>
    </div>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="1" /><strong>North Indian</strong></label>
    </div>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="2" /><strong>South Indian</strong></label>
    </div>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="3" /><strong>Chinese</strong></label>
    </div>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="4" /><strong>Fast Food</strong></label>
    </div>
    <div className="radio" onChange={filterCuisine}>
      <label><input type="radio" name="optradio" value="5" /><strong>Street Food</strong></label>
    </div>
  </form>
</div>
    );
}

export default Cuisinefilter;