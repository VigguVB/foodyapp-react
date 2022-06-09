import React, { useEffect, useState } from 'react';
import Header from '../Header';
import OrderDetails from './OrderDetails';

let url = `https://foody-app-api.herokuapp.com/viewOrder`

function ViewOrder(props) {

    const [orders, setOrders] = useState('')

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setOrders(data)
        })
    })
    return (
        <>
        <Header />
        <div>
           <OrderDetails orderData={orders}/>
        </div>
        </>
    );
}

export default ViewOrder;