import React from 'react';
import Header from '../Header';

function Alert(props) {
    return (
        <>
        <Header />
        <div>
       <h1 style={{textAlign:"center", color:"orangered"}}>Looks Like You haven't Logged In....Please Login Before Checking Out</h1>
       </div>
        </>
    );
}

export default Alert;