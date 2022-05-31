import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './details.css'
import Menulist from './Menulist';

function Details(props) {
let param = useParams();
let restId = param.restid;


let restUrl = `https://foody-app-api.herokuapp.com/details/${restId}`
let menuUrl = `https://foody-app-api.herokuapp.com/menu?restId=${restId}`

const [restData, setRestData] = useState("")
const [menuData, setMenuData] = useState("")
console.log("this is details page")

useEffect(()=>{
    fetch(restUrl)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        setRestData(data)
    })
    fetch(menuUrl)
    .then(res=>res.json())
    .then((menuitems)=>{
        setMenuData(menuitems)
        console.log(menuitems)
    })
},[])
    return (
     <>
     {restData.length>0 &&
        <div>
                {console.log(restData)}

            <div className='restcontainer'>
                <div id="restdiv">
                    <div id="imgdiv">
                        <img src={restData[0]?.restaurant_thumb} width="100%" height="456px" />
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

                    </div>
                </div>
            </div>
            <div className='menu_container'>
            <h2>Menu Items</h2>
                <div className='subcontainer'>
                    
                    <Menulist menu={menuData}/>
                </div>
            </div>
        </div>
        }
        </>
 
    );
}

export default Details;