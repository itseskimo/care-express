"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    emailAdress: "",
    phoneNumber:'',
    streetName:'',
    streetNumber:'',
    apartmentNumber:'',
    postalCode:'',
    city:'',
  });

  const {firstName,lastName,emailAdress,phoneNumber,streetName,streetNumber,apartmentNumber,postalCode,city}=contact

  const contactDetails = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

function formsubmit(e){
  e.preventDefault();
  router.push('/booking/additionalRequirements')
}

  const navDetails={
    clicked:'Booking',
    subcolour:'text-blue',
    border:'rgba(65, 110, 234, 1)',
    background:'bg-black',

    first:{
      id:'#home',
      name:'Home',
    },
    second:{
      id:'#services',
      name:'Our services',
    },
    third:{
      id:'#about',
      name:'About us',
    },
  }


  const footerDetails={
    background:'bg-specialbg',
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-white',
    underline:'1px solid white',
    InstaIcon:'../images/business/Icons/instagram.svg',
    FbIcon:'../images/business/Icons/facebook.svg',
  }

const [hours,setHours]=useState('')
const [cost,setCost]=useState('')

 useEffect(()=>{
  let hours= localStorage.getItem('hours')
  setHours(hours)
  let cost= localStorage.getItem('cost')
  setCost(cost)
 },[])
  
  return (
    <>

    <Navbar color={'bg-blue'} {...navDetails}/>
   
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
{/* ------------RESPONSIBLE FOR MARGIN---------------- */}


  <BookingHeader active={1}/>

<section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6 bg-slate-600'>

<section className=' flex items-center justify-between  pb-5 mx-4 sm:mx-5 xlsm:mx-14 xlg:mx-28 '>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[24px] font-bold'>{hours}</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[24px] font-bold'>{cost}</h6>
</div>


<button className='border-[1px] border-solid  border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]'><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<form className='mx-5 xlsm:mx-14 xlg:mx-28 py-10 '  onSubmit={formsubmit}>


<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4 '>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6 mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>First Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='First Name' required type='text' name='firstName' onChange={contactDetails} value={firstName}  className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Last Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Last Name' required type='text' name='lastName' onChange={contactDetails} value={lastName} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Email Address</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Email Address' required type='email' name='emailAdress' onChange={contactDetails} value={emailAdress} className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Phone Number</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Phone Number' required type='number' name='phoneNumber' onChange={contactDetails} value={phoneNumber} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Street Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Street Name' required type='text' name='streetName' onChange={contactDetails} value={streetName} className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Street Number</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Street Number' required type='number' name='streetNumber' onChange={contactDetails} value={streetNumber} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Apartment Number (Optional)</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Apartment Number' type='number' value={apartmentNumber} onChange={contactDetails} name='apartmentNumber' className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Postal Code</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Postal Code' required type='number' value={postalCode} onChange={contactDetails} name='postalCode' className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:block lg:mb-4'>
<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[49%]'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>City / Town</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='City / Town' required type='text' value={city} onChange={contactDetails} name='city'  className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}



<div className='flex justify-between'>
  <Link href={{pathname:'/booking/plan'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
  {/* <Link href={{pathname:'./booking/additionalRequirements'}}></Link> */}
    <input type='submit' className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' value='Next'/>
</div>


</form>

 

{/* ------------------------------------------------------------------------------------ */}




</section>



</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}



    
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </>
  )
}

export default page
