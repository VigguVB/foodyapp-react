import React, { useEffect, useState } from 'react';
import './placeOrder.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header';

let url = "https://foody-app-api.herokuapp.com/menuItem"
let postUrl = "https://foody-app-api.herokuapp.com/placeOrder"

function PlaceOrder(props) {
    const navigate = useNavigate()
    let param = useParams()
    console.log(param.restName)
    const mealId = sessionStorage.getItem('mealId') 
    const userInfo = sessionStorage.getItem('userInfo').split(",")

    const [name, setName] = useState(userInfo[0]);
    const [email, setEmail] = useState(userInfo[1]);
    const [phone, setPhone] = useState(userInfo[2]);
    const [address, setAddress] = useState("#129/1, Bangalore");
    const [cost, setCost] = useState(0);
    const [menuItem, setMenuItem] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    useEffect(() => {
        let menuItem = sessionStorage.getItem('menu');
        console.log(menuItem)
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })

        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderId)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                let totalPrice = 0;
                data.map((item) => {
                    totalPrice = totalPrice + parseFloat(item.menu_price)
                })
                setMenuItem(data)
                setCost(totalPrice)
            })


    }, [])
    const renderItem = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <div className='itemContainer'>
                        <div id="imgcont">
                            <img src={item.menu_image} width="210px" height="160px" />
                        </div>
                        <div id="content">
                            <h3>{item.menu_name}</h3>
                            <h4>{item.description}</h4>
                            <h3>{item.menu_type}</h3>
                        </div>
                    </div>
                )
            })
        }
    }

    const proceed =()=>{

        let items = []
        menuItem.map((item)=>{
            let ids = item.menu_id
            items.push(ids)
        })
        fetch(postUrl,{
            method:'POST',
            headers:{
                'Access-Control-Allow-Origin': "*",
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(
                {
                    name: name,
                    email: email,
                    contact: phone,
                    address: address,
                    total_cost: cost,
                    items: items
                }
            )
        })
        .then(res=>console.log(res.status))
        .then(navigate("/viewOrder"))
       
    }

    return (
        <>
        <Header />
        <div className='maincontainer'>
            <div id="restDiv">
                <div className='container'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <h2 id="restname">Your Orders from the restaurant {param.restName}</h2>
                        </div>
                        <div className='panel-body'>

                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className='form-control' value={name} disabled/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className='form-control' value={email} disabled/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className='form-control' value={phone} disabled/>
                                </div>
                                <div className='form-group col-md-6'>
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className='form-control' value={address} onChange={handleAddress} required/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='displayItems'>
                        <h2 style={{ textAlign: "center" }}>YOUR CART</h2>
                        <div id='items'>
                            {renderItem(menuItem)}
                        </div>
                        <div id="amt_text">
                            <h3 style={{ textAlign: "center" }}>Total Price Of Your Order Is :</h3>
                        </div>
                        <div id="price">
                            <div className='rupee'>
                                <h2 style={{ textAlign: "center", textDecoration: "none" }}>₹</h2>
                            </div>
                            <div id="amount">
                                <h2 style={{ textAlign: "left", textDecoration: "none" }}>{cost}</h2>

                            </div>
                        </div>
                        <div id="btns">
                            <Link to={`/details/${mealId}`}>
                            <button id="back2">BACK</button>
                            </Link>
                       
                        <button onClick={proceed} id="proceed">PROCEED</button>
                        </div>
                    </div>
                    
                </div>
                

            </div>
        </div>
        </>
    );
}

export default PlaceOrder;