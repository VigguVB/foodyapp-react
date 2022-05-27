import React from 'react';
import './Cuisinefilter.css'
function Cuisinefilter(props) {
    return (
        <div class="container">
  <h2>Cuisine Filter</h2>
  
  <form>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>All</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>Breakfast</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>North Meal</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>South Meal</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>Chinese</strong></label>
    </div>
  </form>
</div>
    );
}

export default Cuisinefilter;