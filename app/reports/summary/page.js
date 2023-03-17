"use client"
import DashBookingHeader from '../../Components/dashBookingHeader/page'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import { postOrder } from '@/redux/actions/page'
import { useDispatch} from 'react-redux'
import { useStripe } from '@stripe/react-stripe-js'

const page = () => {
    const router = useRouter();
    const stripe = useStripe()
    const dispatch= useDispatch()

    const [contact, setContact] = useState({})
    const {_id ,street_name,street_number,apartment_number,postal_code,city}=contact

    const [hours,setHours]=useState('')
    const [cost,setCost]=useState('')
    const [saveCheckBoxesText,setSaveCheckBoxesText]=useState([])
    const [additionalDescription,setAdditionalDescription]=useState('')
    const [calendarDate,setCalendarDate]=useState('')

    const [careType,setCareType]=useState('')
    const [plan,setPlan]=useState('')
    const [token,setToken]=useState('')
  
  useEffect(()=>{
    if(localStorage.getItem('user')){
    let hours= localStorage.getItem('hours')
    setHours(hours)
  
    let cost= localStorage.getItem('cost')
    setCost(cost)
  
    let additionalServicesArr= localStorage.getItem('additionalServicesArr')
    setSaveCheckBoxesText([additionalServicesArr.split(',')])

    let additionalRequirements= localStorage.getItem('additionalRequirements')
    setAdditionalDescription(additionalRequirements)
  
    let calendarDate =localStorage.getItem('calendarDate')
    setCalendarDate(calendarDate)

    const contactData =localStorage.getItem('contact')
    let data = JSON.parse(contactData);
    setContact(data)

    // ------------------------------
    const careType =localStorage.getItem('careType')
    setCareType(careType)

    const plan =localStorage.getItem('plan')
    setPlan(plan)


    let user = localStorage.getItem('user')
    let loginData = JSON.parse(user);
    setToken(loginData.token)
    }
    
  
  },[])
  
  function formsubmit(e){
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("care_type", careType);
    myForm.set("plan", plan);
    myForm.set("address", _id);
    myForm.set("start_date", calendarDate);
    dispatch(postOrder(myForm,token));
  }
  
    function handleGuestCheckout(e){
    e.preventDefault()
    
    stripe.redirectToCheckout({})
    // const response = await stripeAPI('create-checkout-session', { body: { line_items } });

    // const { sessionId } = response;
    // const { error } = await stripe.redirectToCheckout({ sessionId });
    
    // if (error) {
    //   console.log(error);
    // }
  }
  
  return (
    <div className='bg-specialbg  h-max'>
    <Head title='Order History' />
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    <DashboardNav navTitle='Reports' />
    
    <DashBookingHeader active={3}/>




<form className='bg-white h-max rounded-[16px] mt-10' onSubmit={formsubmit}>


<section className=' grid grid-cols-5  mx-2 sm:mx-3 lg:mx-14 xlg:mx-28 py-8'>

<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold '>SELECT PLAN</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{hours} hours</h6>
</div>

<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>PRICE/HOUR</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{cost} zł</h6>
</div>

<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold '>TOTAL PRICE</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{`${parseInt(hours)*parseInt(cost)} zł`}</h6>
</div>

<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>CARE START DATE</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{calendarDate}</h6>
</div>

<button className='border-[1px] border-solid justify-self-end self-start border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/reports/booking')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>



<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<main className='grid grid-cols-5 mx-4 sm:mx-6 lg:mx-14 xlg:mx-28 py-10 '>


<div className=''>
  <div>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NAME</h6>
    <h6 className='text-[16px] font-semibold'>{street_name}</h6>
  </div>
  
  <div className='mt-6'>
  <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>CITY / TOWN</h6>
  <h6 className='text-[16px] font-semibold'>{city}</h6>
  </div>
</div>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{street_number}</h6>
</div>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>APARTMENT NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{apartment_number ? apartment_number : '-'}</h6>
</div>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>POSTAL CODE</h6>
    <h6 className='text-[16px] font-semibold'>{postal_code}</h6>
</div>

<button className='flex border-[1px] border-solid justify-self-end self-start  border-gray-300  shrink-0 px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/reports/contactDetails')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Contact</button>

{/* ------------------------------------------------------------------------------------ */}



</main>


 
<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}

{saveCheckBoxesText && additionalDescription ? 
  <>

<main className=' mx-4 sm:mx-6 lg:mx-14 xlg:mx-28 py-10'>

<section className='flex  items-center relative'>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>ADDITIONAL SERVICES</h6>
     <h6 className='text-[16px] font-semibold'>{saveCheckBoxesText}</h6>
</div>

<div className=' absolute right-0'>
     <button className='border-[1px] border-solid  border-gray-300 flex px-2 xlsm:px-5 py-[10px] text-[13px] sm:text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/additionalRequirements')}><img src='../images/booking/Edit.svg' className='pr-2 sm:pr-3'/>Edit Requirements</button>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-8'>

<div className='w-full lg:w-[70%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-3'>ANY SPECIAL NEEDS OR REQUIREMENTS</h6>
    <h6 className='text-[16px] tracking-[0.02em] font-semibold'>{additionalDescription}</h6>
</div>

</section>

</main>
<section className='border-[1px]  border-solid  border-gray-300' ></section>

</>
: ''
}

{/* <main className=' mx-4 sm:mx-6 lg:mx-14 xlg:mx-28 py-10'>

<section className='flex  items-center justify-between'>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>ADDITIONAL SERVICES</h6>
    <h6 className='text-[16px] font-semibold'>Language Tutoring</h6>
</div>

     <button className='border-[1px] border-solid  border-gray-300 flex px-2 xlsm:px-5 py-[10px] text-[13px] sm:text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/reports/additionalRequirements')}><img src='../images/booking/Edit.svg' className='pr-2 sm:pr-3'/>Edit Requirements</button>

</section>

<section className='flex  items-center  mt-8'>

<div className='w-full lg:w-[70%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-3'>ANY SPECIAL NEEDS OR REQUIREMENTS</h6>
    <h6 className='text-[16px] tracking-[0.02em] font-semibold'>Help with homework and school projects, including reading and writing support. Plan and participate in age-appropriate educational and recreational activities. Provide a safe and comfortable environment, both indoors and outdoors. Communicate effectively and professionally with the parents, other care providers, and healthcare providers. Maintain a clean and organized play and living area. Perform light housekeeping tasks related to the child's care, such as laundry and meal preparation</h6>
</div>

</section>

</main>
<section className='border-[1px]  border-solid  border-gray-300' ></section> */}





{/* ------------------------------------------------------------------------------------ */}


<main className='mx-4 sm:mx-6 lg:mx-14 xlg:mx-28 py-10'>

<section className='flex  items-center relative'>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-3'>CONSENTS</h6>
    <h6 className='text-[16px] tracking-[0.02em] font-semibold'>The quoted price is for children under 3 years of age. If you are planning childcare for children older than 3 years of age, please contact the sales department at +48 885 023 998. CareExpress is committed to protecting and respecting your privacy, and we will only use your personal information to administer your account and to provide the products and services you have requested. From time to time we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent, please tick the box below.</h6>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-6'>

<div className='flex items-center'>
    <input type='checkbox' className='w-4 h-4 mr-2' required ></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold'>I have accept the <span className='text-blue underline decoration-[1px] underline-offset-2'>Terms and Conditions</span> .</h6>
</div>

</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-6'>

<div className='flex items-start '>
    <input type='checkbox' className='w-4 h-4 mt-1 mr-2' required></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold w-[99%]'>I hereby give my consent to receive other notifications from CareExpress. In order to provide you with the requested content, we must store and process your personal data. If you consent to the storage of your personal data for this purpose, please tick the box on the left hand side.</h6>
</div>

</section>

<h6 className='mt-6 tracking-[0.02em] text-[16px]'>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy policies and how we are committed to protecting and respecting your privacy, please see our <span className='text-blue underline decoration-[1px] underline-offset-2'>Privacy Policy</span> .</h6>

<div className='flex justify-between'>
<Link href={{pathname:'/reports/additionalRequirements'}}><button className='bg-ligrey rounded-[50px] px-6 smd:px-9 py-[8px] text-black text-[14px] sm:text-[18px] font-semibold mt-10' >Back</button></Link>
<input type='submit' className='bg-blue rounded-[50px] px-4 smd:px-9 py-[8px] text-white text-[14px] sm:text-[18px] font-semibold mt-10 cursor-pointer' value='Confirm & Proceed to Payment'/>
</div>

</main>


</form>











    </main>
  </div>
    )
}

export default page