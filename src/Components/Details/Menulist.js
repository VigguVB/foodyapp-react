import React, { Component, useEffect, useState } from 'react';
import './Menulist.css'

let orderId = []
function Menulist(props) {
    const[items, setItems] = useState("")
  

    const addItem=(id)=>{
        orderId.push(id)
        props.finalOrder(orderId)

    }
   

    const removeItem=(id)=>{
        if(orderId.indexOf(id) > -1){
            orderId.splice(orderId.indexOf(id),1)
        }
        props.finalOrder(orderId)
    
    }
    const showOrders = ()=>{
        console.log(props.orders)
        let order = props.orders.map((item,index)=>{
            return <li key={index}>Item {item} Added</li>
        })
        setItems([order])
    }
  

    const menuitems = ({ menu }) => {

        if (menu) {
            return menu.map((item) => {

                return <div key={item.menu_id} className="menudiv">
                <div id="serial">
                {item.menu_id}
                </div>
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
                        <button onClick={() => removeItem(item.menu_id)}  className='glyphicon glyphicon-minus set1'></button>

                        <button onClick={() => addItem(item.menu_id)} className='glyphicon glyphicon-plus set2'></button>

                    </div>

                </div>
            })
        }
    }

    return (

        <div>
            <h2 style={{textAlign:"center"}}>Menu Items</h2>
            <button id="show" onClick={showOrders}>View Added Items/ Refresh</button>
            <h3 style={{backgroundColor:"rgb(91, 237, 156)"}}>{items}</h3>
            {menuitems(props)}
        </div>


    );
}

export default Menulist;