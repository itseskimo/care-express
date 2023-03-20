"use client"
// import { PaymentElement } from '@stripe/react-stripe-js'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const page = () => {

  (async()=>{

    // const config = { headers: { 'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`} };
    const customers = await stripe.customers.retrieve('cus_NU9d9YT25URckp')
    // const { data } = await axios.get('https://care-express-api.dthree.in/api/customer/orders/completed', config);

    console.log(customers)
  })()


  





  return (
    <div>
<h6>yyyyyyy</h6>
{/* <PaymentElement/> */}

    </div>
  )
}

export default page