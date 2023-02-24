"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import { useState,useEffect } from 'react'
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




  <BookingHeader active={2}/>

<section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6'>

<section className=' flex items-center justify-between md:justify-start md:gap-28  pb-5 mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 relative'>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{hours}</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{cost}</h6>
</div>


<button className='md:absolute right-0 shrink-0 border-[1px] border-solid  border-gray-300 flex px-3 xlsm:px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/plan')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>
</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<main className='mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 py-10'>

<h6 className='tracking-[0.02em] text-[16px] font-semibold mb-2'>Additional Services</h6>

<section className='flex flex-col md:flex-row gap-4 md:gap-20 lg:gap-32 xlg:gap-48'>
<div className='flex items-center '>
    <input type='checkbox' className='w-4 h-4 mr-2'></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>Language Tutoring</h6>
</div>
<div className='flex items-center'>
    <input type='checkbox' className='w-4 h-4 mr-2'></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>VAS #2</h6>
</div>
<div className='flex items-center'>
    <input type='checkbox' className='w-4 h-4 mr-2'></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>VAS #3</h6>
</div>

</section>

<h6 className='tracking-[0.02em] text-[16px] font-semibold mt-6 mb-3'>Any special needs or requirements</h6>

<textarea style={{border:'1px solid #ABABAB'}} placeholder='Tell us anything else we need to know, like allergies etc.' className='  outline-none bg-inputbg w-full px-4 pt-4  pb-[200px] overflow-hidden rounded-[12px]'></textarea>

<div className='flex justify-between'>
<Link href={{pathname:'/booking/contact'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
  <Link href={{pathname:'./booking/summary'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' >Next</button></Link>
</div>


</main>

 

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
