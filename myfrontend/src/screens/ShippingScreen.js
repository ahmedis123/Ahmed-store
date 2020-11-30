import React, { useEffect, useState } from "react";
import {useDispatch, useSelector, } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { saveShipping } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function SippingScreen (props){
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [postalCode, setPostalCode] = useState('');
const [country, setCountry] = useState('');
 const dispatch = useDispatch();
 
 const submitHandler = (e) =>{
     e.preventDefault();
     dispatch(saveShipping({address, city, postalCode, country}));
    props.history.push("/payment");
}
return <div>
    <CheckoutSteps step1 step2></CheckoutSteps>
<div className="form"> 
<form onSubmit= {submitHandler} >
    <ul className="form-container">
        <li><h2>Sipping</h2></li>
        <li><label htmlFor="address">Address </label> 
        <input type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)}></input>
        </li>
        <li><label htmlFor="address">City </label> 
        <input type="text" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>
        </li>
        <li><label htmlFor="address">Postal Code </label> 
        <input type="text" name="postalCode" id="postalCode" onChange={(e)=>setPostalCode(e.target.value)}></input>
        </li>
        <li><label htmlFor="address">Country </label> 
        <input type="text" name="country" id="country" onChange={(e)=>setCountry(e.target.value)}></input>
        </li>
        <li>
            <button type="submit" className="button primary">Continue</button>
        </li>
      
    </ul>
</form>
</div>
</div>
} 
export default SippingScreen;
