"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation';
import ErrorModal from '../../Components/errorModal/page'
import Head from '../../head'

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
    if(firstName && lastName && emailAdress && phoneNumber && streetNumber && postalCode && city){
    let contactData = JSON.stringify(contact);
    localStorage.setItem('contact',contactData)
    router.push('/booking/additionalRequirements')
    }else{
      setErrorModal(true)

    }
   
}

const [hours,setHours]=useState('')
const [cost,setCost]=useState('')
const closeErrorRef = useRef(null);
  
    const handleErrorClose = (e) => {   
    if(closeErrorRef.current === e.target) setErrorModal(false) 
    }
 useEffect(()=>{
  if(localStorage.getItem('user')){

    let hours= localStorage.getItem('hours')
    setHours(hours)
    let cost= localStorage.getItem('cost')
    setCost(cost)

if(localStorage.getItem('contact')){
  let contact = localStorage.getItem('contact')
  let inputField = JSON.parse(contact);

  setContact({
  firstName:   inputField.firstName,
  lastName:    inputField.lastName,
  emailAdress: inputField.emailAdress,
  phoneNumber: inputField.phoneNumber,
  streetName:  inputField.streetName,
  streetNumber:inputField.streetNumber,
  apartmentNumber: inputField.apartmentNumber,
  postalCode:  inputField.postalCode,
  city:        inputField.city,
  })
}
   
  }

  document.addEventListener("click", handleErrorClose, true);
  return () =>document.removeEventListener("click", handleErrorClose , true)
      
 },[])


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

  const [errorModal, setErrorModal]= useState(false)

  
  return (
    <>
            <Head title='Contact Details'/>

    <Navbar color={'bg-blue'} {...navDetails}/>
    {errorModal && <ErrorModal text='Please Enter All Details!' refState={closeErrorRef}/>}

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
{/* ------------RESPONSIBLE FOR MARGIN---------------- */}


  <BookingHeader active={1}/>

<section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6'>

<section className=' flex items-center justify-between md:justify-start md:gap-28  pb-5 mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 relative'>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{hours} hours</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{`${parseInt(hours)*parseInt(cost)} zł`}</h6>
</div>

  <button className='md:absolute right-0 shrink-0 border-[1px] border-solid  border-gray-300 flex px-3 xlsm:px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/plan')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<form className='mx-5 xlsm:mx-14 xlg:mx-28 py-10 '  onSubmit={formsubmit}>


<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4 '>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6 mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>First Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='First Name'  type='text' name='firstName' onChange={contactDetails} value={firstName}  className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Last Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Last Name'  type='text' name='lastName' onChange={contactDetails} value={lastName} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Email Address</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Email Address' type='email' name='emailAdress' onChange={contactDetails} value={emailAdress} className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Phone Number</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Phone Number' type='number' name='phoneNumber' onChange={contactDetails} value={phoneNumber} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Street Name</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Street Name'  name='streetName' onChange={contactDetails} value={streetName} className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Street Number</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Street Number'  name='streetNumber' onChange={contactDetails} value={streetNumber} className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:mb-4'>
<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%] lg:mr-6  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Apartment Number (Optional)</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Apartment Number'  value={apartmentNumber} onChange={contactDetails} name='apartmentNumber' className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>

<div className=' min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[50%]  mb-1 lg:mb-0'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>Postal Code</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='Postal Code'  value={postalCode} onChange={contactDetails} name='postalCode' className='pl-3 outline-none bg-inputbg w-full  py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex flex-col lg:flex-row items-center justify-center lg:block lg:mb-4'>
<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[70%] lg:w-[49%]'>
  <h6 className='text-[16px] tracking-[0.02em] font-semibold mb-[6px]'>City / Town</h6>
  <input style={{border:'1px solid #ABABAB'}} placeholder='City / Town' type='text' value={city} onChange={contactDetails} name='city'  className='pl-3 outline-none bg-inputbg w-full   py-[10px] mb-2 rounded-[12px]' />
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}



<div className='flex justify-between'>
  <Link href={{pathname:'/booking/plan'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
    <input type='submit' className='bg-blue rounded-[50px] px-9 py-[8px] text-white cursor-pointer text-[18px] font-semibold mt-10' value='Next'/>
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