"use client"
import axios from 'axios';
import {PaymentElement} from '@stripe/react-stripe-js';
import { useEffect , useState} from 'react';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripePromise =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const page = () => {

     
  
 

  
   const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };





  return (
    <div>
<Elements options={options} stripe={stripePromise}>

<form>
      <PaymentElement />
      <button>Submit</button>
    </form>

  </Elements>
     
    </div>
  )
}

export default page