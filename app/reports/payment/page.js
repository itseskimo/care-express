"use client"
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripePromise =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import { loadStripe } from '@stripe/stripe-js';

const page = () => {

     
  
 





  return (
    <div>

    </div>
  )
}

export default page