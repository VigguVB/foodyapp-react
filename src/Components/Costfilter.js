import React from 'react';
import './Costfilter.css'
function Costfilter(props) {
    return (
        <div className="container">
  <h2>Cost Filter</h2>
  
  <form>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>Below 200</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>201 to 500</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>501 to 1000</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>1000 to 1500</strong></label>
    </div>
    <div className="radio">
      <label><input type="radio" name="optradio" /><strong>1501 & above</strong></label>
    </div>
  </form>
</div>
    );
}

export default Costfilter;