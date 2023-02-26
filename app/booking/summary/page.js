"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/navigation';
import { legacy_createStore } from 'redux'
import Head from '../../head'

const page = () => {
  const router = useRouter();

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
  const [contact, setContact] = useState({})
  const {firstName,lastName,emailAdress,phoneNumber,streetName,streetNumber,apartmentNumber,postalCode,city}=contact

  const [hours,setHours]=useState('')
  const [cost,setCost]=useState('')
  const [saveCheckBoxesText,setSaveCheckBoxesText]=useState([])
  const [additionalDescription,setAdditionalDescription]=useState('')

useEffect(()=>{
  let hours= localStorage.getItem('hours')
  setHours(hours)

  let cost= localStorage.getItem('cost')
  setCost(cost)

  let additionalArray= localStorage.getItem('additionalArray')
  setSaveCheckBoxesText([additionalArray.split(',')])

  let additionalDescription= localStorage.getItem('additionalDescription')
  setAdditionalDescription(additionalDescription)


const contactData =localStorage.getItem('contact')
let data = JSON.parse(contactData);
setContact(data)
},[])
  

function formsubmit(e){
  e.preventDefault();
  router.push('/booking/account')
}

  return (
    <>
            <Head title='Summary'/>

    <Navbar color={'bg-blue'} {...navDetails}/>

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 smd:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

    <BookingHeader active={3}/>

<form className='bg-white h-max rounded-[16px] mt-10' onSubmit={formsubmit}>


<section className=' flex  items-center relative mx-2 sm:mx-3 lg:mx-14 xlg:mx-28 py-8'>
<div className=' md:w-[16.5%] lg:w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold '>SELECT PLAN</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{hours}</h6>
</div>

<div className=' md:w-[16.5%] lg:w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>PRICE/HOUR</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{cost}</h6>
</div>

<div className=' md:w-[16.5%] lg:w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold '>TOTAL PRICE</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>{`${parseInt(hours)*parseInt(hours)} zł`}</h6>
</div>

<div className=' md:w-[16.5%] lg:w-[20%]  min-w-[140px] lg:min-w-[168px]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>CARE START DATE</h6>
  <h6 className='text-[20px] lg:text-[24px] font-bold'>15 March 2023</h6>
</div>

<div className='absolute right-0'>
<button className='border-[1px] border-solid  border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/plan')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>
</div>

</section>



<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<main className='flex items-start relative  mx-4 sm:mx-6 lg:mx-14 xlg:mx-28 py-10 '>

<section className='w-[50%] xlsm:w-[40%] md:w-[25%] lg:w-[20%]'>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>FIRST NAME</h6>
    <h6 className='text-[16px] font-semibold'>{firstName}</h6>
</div>

<div className='mt-6 block md:hidden'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>EMAIL ADDRESS</h6>
    <h6 className='text-[16px] font-semibold'>{emailAdress}</h6>
</div>

<div className='mt-6'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NAME</h6>
    <h6 className='text-[16px] font-semibold'>{streetName}</h6>
</div>

<div className='mt-6'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>CITY / TOWN</h6>
    <h6 className='text-[16px] font-semibold'>{city}</h6>
</div>

<div className='mt-6 md:hidden'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>POSTAL CODE</h6>
    <h6 className='text-[16px] font-semibold'>{postalCode}</h6>
</div>
</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='absolute right-0 xlsm:static xlsm:w-[40%] md:w-[25%] lg:w-[20%]'>

<button className='  border-[1px] border-solid  border-gray-300 xlsm:hidden flex  shrink-0 px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/contact')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Contact</button>


<div className='mt-6 xlsm:mt-0'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>LAST NAME</h6>
    <h6 className='text-[16px] font-semibold'>{lastName}</h6>
</div>

<div className='mt-6 block lg:hidden '>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>PHONE NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{phoneNumber}</h6>
</div>

<div className='mt-6'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{streetNumber}</h6>
</div>

<div className='mt-6 block md:hidden'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>APARTMENT NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{apartmentNumber ? apartmentNumber : '-'}</h6>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}
<section className='hidden md:block w-[25%] lg:w-[20%] '>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>EMAIL ADDRESS</h6>
    <h6 className='text-[16px] font-semibold'>{emailAdress}</h6>
</div>

<div className='mt-6'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>APARTMENT NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{apartmentNumber ? apartmentNumber : '-'}</h6>
</div>

<div className='mt-6 block lg:hidden'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>POSTAL CODE</h6>
    <h6 className='text-[16px] font-semibold'>{postalCode}</h6>
</div>
</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='hidden lg:block w-[20%] '>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>PHONE NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>{phoneNumber}</h6>
</div>

<div className='mt-6'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>POSTAL CODE</h6>
    <h6 className='text-[16px] font-semibold'>{postalCode}</h6>
</div>

</section>

{/* ------------------------------------------------------------------------------------ */}

<button className='absolute right-0 border-[1px] border-solid  border-gray-300 hidden xlsm:flex  shrink-0 px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/contact')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Contact</button>

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
<Link href={{pathname:'/booking/additionalRequirements'}}><button className='bg-ligrey rounded-[50px] px-6 smd:px-9 py-[8px] text-black text-[14px] sm:text-[18px] font-semibold mt-10' >Back</button></Link>
{/* <Link href={{pathname:'./booking/account'}}><button className='bg-blue rounded-[50px] px-4 smd:px-9 py-[8px] text-white text-[14px] sm:text-[18px] font-semibold mt-10 ' >Confirm & Proceed to Sign up</button></Link> */}
{/* <button className='bg-blue rounded-[50px] px-4 smd:px-9 py-[8px] text-white text-[14px] sm:text-[18px] font-semibold mt-10 ' >Confirm & Proceed to Sign up</button> */}
<input type='submit' className='bg-blue rounded-[50px] px-4 smd:px-9 py-[8px] text-white text-[14px] sm:text-[18px] font-semibold mt-10 cursor-pointer' value='Confirm & Proceed to Sign up'/>
</div>

</main>



















</form>



</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}



    
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </>
  )
}

export default page
