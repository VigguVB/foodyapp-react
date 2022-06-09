import React from 'react';

function OrderDetails(props) {

    const renderTable = ({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.contact}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.total_cost}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className="container">
            <center><h2>Orders</h2></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>  
                        <th>RName</th>  
                        <th>Name</th>  
                        <th>Phone</th>  
                        <th>Email</th>  
                        <th>Cost</th>  
                        <th>Date</th>  
                        <th>Status</th>   
                        <th>BankName</th>  
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    );
}

export default OrderDetails;