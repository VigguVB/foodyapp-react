import React from 'react';
import './Costfilter.css'
let url = `https://foody-app-api.herokuapp.com/filters`
function Costfilter(props) {

  const filterCost = (e)=>{
    let cost = e.target.value.split("-")
    let lcost = Number(cost[0])
    let hcost = Number(cost[1])
    let mealId = sessionStorage.getItem('mealId')

    if(e.target.value===""){
      fetch(`${url}/${mealId}`)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
        props.costFilteredData(data)

      })
    }else{
      fetch(`${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`)
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
        props.costFilteredData(data)

      })
    }
  }
    return (
        <div className="container">
  <h2>Cost Filter</h2>
  
  <form>
  <div onChange={filterCost} className="radio">
      <label><input type="radio" value="" name="optradio" /><strong>All</strong></label>
    </div>
    <div onChange={filterCost} className="radio">
      <label><input type="radio" value="100-200" name="optradio" /><strong>100 to 200</strong></label>
    </div>
    <div onChange={filterCost} className="radio">
      <label><input type="radio" value="201-500" name="optradio" /><strong>201 to 500</strong></label>
    </div>
    <div onChange={filterCost} className="radio">
      <label><input type="radio" value="501-1000" name="optradio" /><strong>501 to 1000</strong></label>
    </div>
    <div onChange={filterCost} className="radio">
      <label><input type="radio" value="1000-1500" name="optradio" /><strong>1000 to 1500</strong></label>
    </div>
    <div onChange={filterCost} className="radio">
      <label><input type="radio" value="1501-5000" name="optradio" /><strong>1501 -3000</strong></label>
    </div>
  </form>
</div>
    );
}

export default Costfilter;