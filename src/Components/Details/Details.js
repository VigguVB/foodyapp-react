import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './details.css'
import Menulist from './Menulist';

function Details(props) {
    let param = useParams();
    let restId = param.restid;


    let restUrl = `https://foody-app-api.herokuapp.com/details/${restId}`
    let menuUrl = `https://foody-app-api.herokuapp.com/menu?restId=${restId}`
    let sessionid = sessionStorage.getItem("mealId")

    const [restData, setRestData] = useState("")
    const [menuData, setMenuData] = useState("")
    const [finalOrderData, setFinalOrderData] = useState('')


    useEffect(() => {
        fetch(restUrl)
            .then(res => res.json())
            .then((data) => {

                setRestData(data)
            })
        fetch(menuUrl)
            .then(res => res.json())
            .then((menuitems) => {
                setMenuData(menuitems)

            })
    }, [])


    const addToCart = (data) => {

        setFinalOrderData(data)
    }
    // const itemsAdded = (items)=>{
    //     if(items){
    //         return items.map((item, index)=>{
    //             return(
    //                 <ul key={index}>
    //                     <li>{item}</li>
    //                 </ul>
    //             )
    //         })
    //     }
    // }

    const proceed = () => {
        // const history = createBrowserHistory()
        sessionStorage.setItem("menu", finalOrderData)
        // history.push(`/placeOrder/${restData[0].restaurant_name}`)

    }
    return (
        <>
            {restData.length > 0 &&
                <div>

                    <div className='restcontainer'>
                        <div id="restdiv">
                            <div id="imgdiv">
                                <img src={restData[0]?.restaurant_thumb} width="100%" height="495px" />
                            </div>
                            <div id="rightdiv">
                                <h1 id="restname">{restData[0].restaurant_name}</h1>
                                <h2 id='add'>{restData[0].address}</h2>
                                <h4 className='rating'>{restData[0].rating_text}</h4>
                                <h4 className='rating'>COST: ₹ {restData[0].cost}</h4>
                                <h4 className='rating'>CONTACT: {restData[0].contact_number}</h4>
                                <div id="pngcontainer">
                                    <div>
                                        <span id="avail">Available</span>
                                    </div>
                                    <img src="https://i.ibb.co/MMjXp02/veg.png" width="110px" height="110px" className='pngs' />
                                    <img src="https://i.ibb.co/p4WFPr0/freedelivery.png" width="110px" height="110px" className='pngs' />
                                </div>
                                <Link to={`/listing/${sessionid}`}>
                                    <button id="back">BACK</button>
                                </Link>
                                <Link to={`/placeOrder/${restData[0].restaurant_name}`}>
                                    <button onClick={proceed} id="checkout">CHECKOUT</button>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div className='menu_container'>

                        <div className='subcontainer'>
                            <Menulist menu={menuData} finalOrder={(data) => addToCart(data)} orders={finalOrderData} />
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default Details;