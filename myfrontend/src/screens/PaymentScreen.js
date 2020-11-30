import React, { useEffect, useState } from "react";
import {useDispatch, useSelector, } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen (props){
const [paymentMethod, setPaymentMethod] = useState('');
 const dispatch = useDispatch();
 
 const submitHandler = (e) =>{
     e.preventDefault();
     dispatch(savePayment({paymentMethod}));
    props.history.push("/placeorder");
}
return <div>
    <CheckoutSteps step1 step2 step3></CheckoutSteps>
<div className="form"> 
<form onSubmit= {submitHandler} >
    <ul className="form-container">
        <li><h2>Payment</h2></li>
        <div>
        <input type="radio" value="paypal" name="paymentMethod" id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>
        <li><label htmlFor="paymentMethod">Paypal </label> 
        </li>
       </div>
       <li>
            <button type="submit" className="button primary">Continue</button>
        </li>
    </ul>
</form>
</div>
</div>
} 
export default PaymentScreen;
