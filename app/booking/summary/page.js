"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
const page = () => {

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


  
  return (
    <>
      
    {/* <nav  className='flex justify-end h-6 box-border bg-black'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs  lg:text-sm py-2'>
    <span className='px-2.5	mt-0.5 cursor-pointer'>FAQs</span>
    <span className='px-2.5 mt-0.5	cursor-pointer'>About us</span>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> */}

    <Navbar color={'bg-blue'} {...navDetails}/>
 

   
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}




  <BookingHeader active={3}/>

<section className='bg-white h-max rounded-[16px] mt-10'>


<section className=' flex  items-center relative  mx-28 py-8'>
<div className='w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[24px] font-bold'>80 hours</h6>
</div>

<div className='w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>PRICE/HOUR</h6>
  <h6 className='text-[24px] font-bold'>37,90 zł</h6>
</div>

<div className='w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[24px] font-bold'>3032 zł</h6>
</div>

<div className='w-[20%]'>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>CARE START DATE</h6>
  <h6 className='text-[24px] font-bold'>15 March 2023</h6>
</div>

<div className='absolute right-0'>
<button className='border-[1px] border-solid  border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]'><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>
</div>

</section>



<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<main className='mx-28 py-10'>

<section className='flex  items-center relative'>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>FIRST NAME</h6>
    <h6 className='text-[16px] font-semibold'>Natalia</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>LAST NAME</h6>
    <h6 className='text-[16px] font-semibold'>Kowalska</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>EMAIL ADDRESS</h6>
    <h6 className='text-[16px] font-semibold'>nat_ko@gmail.com</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>PHONE NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>505 602 304</h6>
</div>

<div className=' absolute right-0'>
     <button className='border-[1px] border-solid  border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]'><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Contact</button>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-8'>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NAME</h6>
    <h6 className='text-[16px] font-semibold'>Grójecka</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>STREET NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>45</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>APARTMENT NUMBER</h6>
    <h6 className='text-[16px] font-semibold'>17</h6>
</div>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>POSTAL CODE</h6>
    <h6 className='text-[16px] font-semibold'>02-031</h6>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}
<section className='flex  items-center  mt-8'>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>CITY / TOWN</h6>
    <h6 className='text-[16px] font-semibold'>Warszawa</h6>
</div>

</section>

</main>

 
<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}

<main className='mx-28 py-10'>

<section className='flex  items-center relative'>

<div className='w-[20%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-1'>ADDITIONAL SERVICES</h6>
    <h6 className='text-[16px] font-semibold'>Language Tutoring</h6>
</div>

<div className=' absolute right-0'>
     <button className='border-[1px] border-solid  border-gray-300 flex px-5 py-[10px] text-sm font-semibold rounded-[50px]'><img src='../images/booking/Edit.svg' className='pr-3'/>Edit Requirements</button>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-8'>

<div className='w-[70%]'>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-3'>ANY SPECIAL NEEDS OR REQUIREMENTS</h6>
    <h6 className='text-[16px] tracking-[0.02em] font-semibold'>Help with homework and school projects, including reading and writing support. Plan and participate in age-appropriate educational and recreational activities. Provide a safe and comfortable environment, both indoors and outdoors. Communicate effectively and professionally with the parents, other care providers, and healthcare providers. Maintain a clean and organized play and living area. Perform light housekeeping tasks related to the child's care, such as laundry and meal preparation</h6>
</div>

</section>


</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}


<main className='mx-28 py-10'>

<section className='flex  items-center relative'>

<div className=''>
    <h6 className='tracking-[0.12em] text-xs font-semibold mb-3'>CONSENTS</h6>
    <h6 className='text-[16px] tracking-[0.02em] font-semibold'>The quoted price is for children under 3 years of age. If you are planning childcare for children older than 3 years of age, please contact the sales department at +48 885 023 998. CareExpress is committed to protecting and respecting your privacy, and we will only use your personal information to administer your account and to provide the products and services you have requested. From time to time we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent, please tick the box below.</h6>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-6'>

<div className='flex items-center'>
    <input type='checkbox' className='w-4 h-4 mr-2'></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold'>I have accept the <span className='text-blue underline decoration-[1px] underline-offset-2'>Terms and Conditions</span> .</h6>
</div>

</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='flex  items-center  mt-6'>

<div className='flex items-start '>
    <input type='checkbox' className='w-4 h-4 mt-1 mr-2'></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold w-[99%]'>I hereby give my consent to receive other notifications from CareExpress. In order to provide you with the requested content, we must store and process your personal data. If you consent to the storage of your personal data for this purpose, please tick the box on the left hand side.</h6>
</div>

</section>

<h6 className='mt-6 tracking-[0.02em] text-[16px]'>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy policies and how we are committed to protecting and respecting your privacy, please see our <span className='text-blue underline decoration-[1px] underline-offset-2'>Privacy Policy</span> .</h6>

<div className='flex justify-between'>
<Link href={{pathname:'/booking/additionalRequirements'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
<Link href={{pathname:'./booking/account'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' >Confirm & Proceed to Sign up</button></Link>
</div>

</main>



















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
