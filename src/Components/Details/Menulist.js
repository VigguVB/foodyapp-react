import React, { useState } from 'react';
import './Menulist.css'
function Menulist(props) {
    const[amount, setAmount] = useState(0)
    const menuitems = ({menu})=>{

        if(menu){
           return menu.map((item)=>{
              
               return <div key={item.menu_id} className="menudiv">
                   <div id="imgdiv1">
                        <img src={item.menu_image} width='135px' height="140px" />
                   </div>
                   <div className='menudisplaydiv1'>
                       <h3 id="menu_name">{item.menu_name}</h3>
                       <h4 id="menu_desc">{item.description}</h4>
                       <button id="type">{item.menu_type}</button>
                       <button id="rupee">₹ {item.menu_price}</button>
                   </div>
                   <div className='menudisplaydiv2'>
                        <button className='glyphicon glyphicon-minus set1'></button>
                        <span className='countitem'>{amount}</span>
                        <button className='glyphicon glyphicon-plus set2'></button>

                   </div>
               </div>
           })
        }
    }
    return (
        <div>
          {menuitems(props)}
        </div>
    );
}

export default Menulist;