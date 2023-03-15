"use client"
import Head from '../../head'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import MyCheckoutForm from '../../Components/MyCheckoutForm/page';
const stripePromise =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const page = () => {

  return (
    <>
   <Elements stripe={stripePromise}>
      <MyCheckoutForm/>
   </Elements>
    </>
    )
}

export default page